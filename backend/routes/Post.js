const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Get Posts Endpoint
router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                user: true
            }
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get Post By ID
router.get('/:id', async (req, res) => {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: String(req.params.id),
            }
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


//Create Posts Enpoint
router.post('/', async (req, res) => {
    try {
        const post = await prisma.post.create({
            data: {
                title: req.body.params.newPost.title,
                description: req.body.params.newPost.description,
                user: {
                    connect: { id: req.body.params.sessionID }
                }
            }
        });
        res.status(201).json(post);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
});

//Update Posts Endpoint
router.put('/:id', async (req, res) => {
    try {
        const post = await prisma.post.update({
            where: {
                id: String(req.params.id),
            },
            data: {
                title: req.body.title,
                description: req.body.description
            }
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete Posts Endpoint
router.delete('/:id', async (req, res) => {
    try {
        const post = await prisma.post.delete({
            where: {
                id: String(req.params.id),
            }
        });
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
    
});


module.exports = router