import express from 'express'
import morgan from 'morgan'
import { AppDataSource } from './data-source'
import authRoute from './routes/auth'
import subsRoute from './routes/subs'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

const app = express()
const whitelist = ['http://192.168.50.224:3000', 'http://localhost:3000']
const corsOptions = {
	origin: function(origin: any, callback: Function) {
		if(whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not Allowed Origin'))
		}
	},
	credentials: true
}

app.use(
	cors(corsOptions),
)

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

dotenv.config()

app.get('/', (_, res) => res.send('running'))
app.use('/api/auth', authRoute)
app.use('/api/subs', subsRoute)

let port = 4000

app.listen(port, async () => {	
	AppDataSource.initialize().then(async () => {
		console.log('initialize')
	}).catch(error => console.log(error))
})