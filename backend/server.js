import express from 'express';


const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'A 2 joke',
            content:'this is a 2 joke'
        },
        {
            id:3,
            title:'A 3 joke',
            content:'this is a 3 joke'
        },
        {
            id:4,
            title:'A 4 joke',
            content:'this is a 4 joke'
        },
        {
            id:5,
            title:'A 5 joke',
            content:'this is a 5 joke'
        },
    ];
    res.send(jokes);


});

const port = process.env.PORT || 3000;
 //port  either comes form environment files or we can custom create
 //in production we want PORT from the env file or else the app is not gonna run in production 

 app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
    
 });