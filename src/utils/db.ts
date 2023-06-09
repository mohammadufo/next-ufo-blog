import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('connected to database')
  } catch (err) {
    throw new Error('connection failed')
  }
}

export default connect
