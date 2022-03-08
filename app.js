const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('<h1>Express Project <h3>Success</h3><p>1.5</p>');
})

app.get('/products',(req,res)=>{
    res.send([
        {
            productid:'10',
            price: 200
        },
        {
            productid:'11',
            price: 400  
        }
    ])
})

app.listen(port,()=>{
    console.log(`Listening to the port: ${port}`);
})