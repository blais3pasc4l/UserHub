import { Router } from "express"
import { prisma } from "../db.js"

const router = Router()


router.get('/user', async (req, res) =>{
    const user = await prisma.user.findMany()
    res.json(user)
})

router.post('/user', async (req, res) =>{
    const newUser = await prisma.user.create({
        data: req.body,
    })

    res.json(newUser)
})

router.get('/user/:id', async (req, res) =>{
    const userFound = await prisma.user.findFirst({
        where:{
            id: parseInt(req.params.id)
        }
    })
    
    if(!userFound) return res.status(400).json({error: "user not found"})
    
    return res.json(userFound)
})

router.delete('/user/:id', async (req, res) =>{
    const userDeleted = await prisma.user.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    
    if(!userDeleted) return res.status(400).json({error: "user not found"})
    
    return res.json(userDeleted)
})

router.put('/user/:id', async (req, res) =>{
    const userUpdate = await prisma.user.update({
        where:{
            id: parseInt(req.params.id)
        },
        data: req.body
    })

    return res.json(userUpdate)
})
 
export default router