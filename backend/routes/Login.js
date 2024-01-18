const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


//Login User Enpoint
router.post('/', async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                name: req.body.name,
                email: req.body.email
            }
        });
        if (user) {
            res.status(200).json({ message: 'User Authenticated' });
        }
        else {
            console.log('User Not Registered');
            res.status(403).json({ message: 'User Not Registered' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router