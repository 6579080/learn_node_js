const Router = require('../framework/Router');

const router = new Router();

const users = [
    {id:1, name:'User1'},
    {id:2, name:'User2'},
]
router.get('/users', (req, res) =>{
    res.send(users);
})

router.post('/users', (req, res) =>{
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(users);
})

module.exports = router;