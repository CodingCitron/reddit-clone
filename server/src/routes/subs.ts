import { Request, Response, Router } from "express"
import jwt from 'jsonwebtoken'
import { User } from "../entities/User"
import userMiddleware from "../middlewares/user"
import authMiddleware from "../middlewares/auth"
import { isEmpty } from "class-validator"

const createSub = async (req: Request, res: Response, next: Function) => {
    const { name, title, description } = req.body

    try {
        let errors: any = {}
        
        if(isEmpty(name)) errors.name = '이름은 비워둘 수 없습니다.'
        if(isEmpty(title)) errors.title = '제목은 비워둘 수 없습니다.'


    } catch (error) {

    }
}

const router = Router()

router.post('/', userMiddleware, authMiddleware, createSub)

export default router