import express from 'express'
import { smapleproducts } from './data'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { productRouter } from './routes/productRouter'
import { seedRouter } from './routes/seedRouter'
import { userRouter } from './routes/userRouter'

dotenv.config()

dotenv.config()

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/tsmernamazona'
  mongoose.set('strictQuery', true)
  mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/seed', seedRouter)

// app.use(cors({
//   credentials:true,
//   origin: ['http://localhost:5173/'],
// }))


const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})