const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())


// const handler = (req, res) => {
//     res.send('Hello from node')
// }

// app.get('/', handler);

app.get('/', (req, res) => {
    res.send('hello from node first ever node for react devlopment project ')
});


const users = [
    {Id:0, name: 'Shabana', mail:'shabana@gmail.com', phone: '0178888888'},
    {Id:1, name: 'Shabnoor', mail:'shabnoor@gmail.com', phone: '01850000000'},
    {Id:2, name: 'Suchorita', mail:'suchorita@gmail.com', phone: '0179999999'},
    {Id:3, name: 'Shabnaz', mail:'shabanaz@gmail.com', phone: '01444444'},
    {Id:4, name: 'mousumi', mail:'mousumi@gmail.com', phone: '01766666'},
    {Id:5, name: 'alamgir', mail:'alamgir@gmail.com', phone: '0178959595'},
    {Id:6, name: 'purnima', mail:'purnima@gmail.com', phone: '0178877788222'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
       res.send(users) 
    }
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('hitting the post', req.body);
    const newUser = req.body;
    newUser.Id = users.length;
    users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user =users [id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'apple'])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
})