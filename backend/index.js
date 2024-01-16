const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express();

//JSON parser
app.use(express.json());


//Test Endpoint
app.get('/test', (req, res) => {
    try {
        res.status(200).json({ message: 'API is working' });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

//Get Users Endpoint
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get Users By ID
app.get('/users/:id', async (req, res) => {
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
app.post('/users', async (req, res) => {
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
app.put('/users/:id', async (req, res) => {
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
app.delete('/users/:id', async (req, res) => {
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));