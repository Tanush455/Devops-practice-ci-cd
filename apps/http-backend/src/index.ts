import express, { NextFunction ,Request,Response} from 'express';
import {prisma} from '@repo/db/client'
const app = express();
app.use(express.json());

app.post("/signup",async (req:Request,res:Response,next:NextFunction) =>{
    const password = req.body.password;
    const username = req.body.username;
    const email = req.body.email;

    await prisma.user.create({
        data:{
            username:username,
            password:password,
            email:email
        }
    });


    res.json({
        message: "sign up sucess fully"
    })
})

app.listen(3000,() => {
    console.log("3000 post par ham listen kar rahe hai");
})