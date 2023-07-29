const express=require('express')
const app=express();
const hbs=require('hbs');
const path = require('path')

const port= process.env.PORT || 3000;


app.set('view engine' ,'hbs')


const viewDirectory=path.join(__dirname , '../temp1/views')
app.set('views' , viewDirectory)


const partialsPath= path.join(__dirname , '../temp1/partials')
hbs.registerPartials(partialsPath)



app.get('/' ,(req , res)=>{
    res.render('index' ,{
        title:'Home Page' ,
        desc:'Welcom to my website'
    })
})


app.get('/chWeather' ,(req , res)=>{
    res.render('chWeather' ,{
        title:'Weather',
       country : 'egypt' ,
       latitude :29.8719034524 ,
       longtitude : 26.4941838299 ,
       curWeather: "Clear" ,
       temperature: 27
    })
})
















app.listen(port , ()=>{
     console.log(`Example app listenting on port  ${port}`)
})