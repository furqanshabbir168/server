import express from "express";

const PORT = 9000;
const app = express();

app.use('/',(request,response)=>{
    response.send("Hello express app")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})