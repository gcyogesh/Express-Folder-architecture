import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import DbConnection from './config/DbConnection';


const app = express();

app.use(express.json())
import router from './routes/UserRoutes';
app.use('/api/user', router)
// for conneting database 
DbConnection();


const port = process.env.PORT;

app.listen(port, ()=>{
  console.log(`App is running on ${port}`)
})