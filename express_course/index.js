// const express = require('express');
// const path = require('path')

// const app = express();

// // app.get('/', function(req,res){
// //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });
// app.get('api/members', (req, res) => res.json(members));
// //Set Static Folder 
// // app.use(express.static(path.join(__dirname, 'public')));



// const PORT = 2222;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express')
const path = require('path')
const moment = require('moment');


const app = express();
const logger = (req, res, next) =>{
    console.log("Hello")
    next()
}
app.use(logger)
const members = [
    {
                id: 1,
                name: 'Ankita Yadav',
                email: 'ankita@plantyouridea.com',
                status: 'active'
            },
            {
                id: 2,
                name: 'Chetan Sachdev',
                email: 'chetan@plantyouridea.com',
                status: 'inactive' 
            }
]
 


app.get('/api/members', function(req, res){
    res.json(members)
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(2211, function(){
    console.log("Server running on port 2211")
})