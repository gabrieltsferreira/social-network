const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//Get Users Endpoint
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get Users By ID
router.get('/:id', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: String(req.params.id),
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


//Create User Enpoint
router.post('/', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email
            }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update User Endpoint
router.put('/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: String(req.params.id),
            },
            data: {
                name: req.body.name,
                email: req.body.email
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete User Endpoint
router.delete('/:id', async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: String(req.params.id),
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ mssage: error.message });
    }
    
});


module.exports = router