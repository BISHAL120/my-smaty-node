const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my very smary pant');
});

const users =[
    {id: 1, name: 'sbana', email: 'sabana@gmail.com', phone: '01788888888'},
    {id: 2, name: 'sahim', email: 'rahim@gmail.com', phone: '01788888888'},
    {id: 3, name: 'karim', email: 'karim@gmail.com', phone: '01788888888'},
    {id: 4, name: 'kasim', email: 'jasim@gmail.com', phone: '01788888888'},
    {id: 5, name: 'fahim', email: 'fahim@gmail.com', phone: '01788888888'},
    
];

// filter by query
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id == id); 
    res.send(user);
});


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange']);
});

app.get('/fruts/mango/fazle', (req, res) => {
    res.send('sour sour fazle flaver');
});

app.listen(port, ()=> {
    console.log('Listening to port', port);
});