import { Request, Response, Router } from "express"
import jwt from 'jsonwebtoken'
import { User } from "../entities/User"
import userMiddleware from "../middlewares/user"
import authMiddleware from "../middlewares/auth"

const createSub = async (req: Request, res: Response, next: Function) => {
    const { name, title, description } = req.body

    const token = req.cookies.token
    if(!token) return next()

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET!)
    const user = await User.findOneBy({ username })

    if(!user) throw new Error(`Unathenticated`)
}

const router = Router()

router.post('/', userMiddleware, authMiddleware, createSub)

export default router