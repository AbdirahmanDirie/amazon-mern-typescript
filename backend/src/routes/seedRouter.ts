import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ProductModel } from '../models/productModel'
import { sampleUsers, smapleproducts } from '../data'
import { UserModel } from '../models/userModel'
export const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(smapleproducts)
    res.send({ createdProducts })

    await UserModel.deleteMany({})
    const createdUsers = await UserModel.insertMany(sampleUsers)
    res.send({ createdProducts, createdUsers })
  })


)
