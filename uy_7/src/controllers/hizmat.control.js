const {fetch, fetchOne} = require('../utils/pg')

const hisoblash = async(req, res) =>{
    const token = req.user.data;
    console.log('token: ', token);
    const {id} = req.params
    const user = await fetchOne('select * from users where user_id = $1', token)
    console.log('user: ', user);
    const xizmat = await fetchOne('select* from xizmat where xizmat_id = $1', id)
    console.log('xizmat: ', xizmat);
    
    await fetch('update users set balance = balance - $1 where user_id = $2', xizmat.price, token)
    
    await fetch('update users set balance = balance + $1 where user_id = $2', xizmat.price, xizmat.user_id)
    res.status(200).send({message: 'success'});
}

module.exports = hisoblash