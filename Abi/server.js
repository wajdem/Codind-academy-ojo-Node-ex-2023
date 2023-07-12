const express = require('express');
const app = express();
const fs = require('fs');
let users = JSON.parse(fs.readFileSync('./data.json'));
app.use(express.json());




app.get('/users', (req, res)=>{
    res.status(200).json({
        status:'success',
                data:{
                    users: users
                }
    })
})


app.get('/users/:id', (req, res)=>{
const id = req.params.id * 1
const user = users.find(el => el.id === id)
res.send(user);
})

app.post('/user/create', (req,res)=>{
// console.log(req.body);
const newID = users[users.length - 1].id + 1;

const newUsres = Object.assign({id: newID}, req.body);
users.push(newUsres);

fs.writeFile('./data.json', JSON.stringify(users), (err)=>{
 res.status(201).json({
    status: 'success',
    data:{
        users: newUsres
    }
 })
})

// res.send('created')
});

//-----------patch
app.patch('/users/:id/edit', (req, res)=>{
    // req.params.id * 1;
    let id = req.params.id * 1;
    let usresToUpdate = users.find(el => el.id === id)
    let index = users.indexOf(usresToUpdate);

    Object.assign(usresToUpdate , req.body)

    users[index] = usresToUpdate;

    fs.writeFile('./data.json', JSON.stringify(users) , (err) =>{
        res.status(200).json({
            status: 'success',
            data:{
                users: newUsres
            }
         })
    })
})

app.delete('/users/:id/delete' , (req, res) =>{
    const id = req.params.id * 1;
    const usersToDelete = users.find(el => el.id === id);
    const index = users.indexOf(usersToDelete);

    users.splice(index, 1);

    fs.writeFile('./data.json', JSON.stringify(users) , (err) =>{
        res.status(204).json({
            status: 'success',
            data:{
                users: null
            }
         })
    })

})

app.listen(8686, (req, res)=>{
    console.log(" your port is running on port 8686");
})



