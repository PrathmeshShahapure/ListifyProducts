import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from  './routes/productRoutes.js'
import path from 'path';
dotenv.config();

const app = express();



app.use(express.json());

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();
app.use("/api/products",productRoutes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'Frontend','dist')));
    app.get('*',(req,res)=>{   
      res.sendFile(path.resolve(__dirname,'Frontend','dist','index.html'))
    })
}

   

app.listen(PORT,()=>{
    connectDB();
   
    console.log("server is running at http://localhost:"+PORT)
});
