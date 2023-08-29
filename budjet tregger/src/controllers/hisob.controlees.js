const knex = require("../database");

const hisobkitob = async (req, res) => {
    try {
        const { id } = req.params;
        const daxodId = req.body.daxodId;
        const rasxodId = req.body.rasxodId;

        const [userData] = await knex('users').select("*").where('user_id', id);

        const [dax] = await knex('daxod').select("*");

        const [rasxo] = await knex("rasxod").select("*");

        const UserWallet = userData.user_wallet - rasxodId;
        const DaxodWallet = dax.daxod_wallet + daxodId;
        const RasxodWallet = rasxo.raxod_wallet + rasxodId;

        const rasxoNewEntry = {
            rasxod_category_name: rasxo.rasxod_category_name,
            raxod_wallet: RasxodWallet, 
            rasxod_user_id: rasxo.rasxod_user_id
        };

        const daxodNewEntry = {
            daxod_category_name: dax.daxod_category_name,
            daxod_wallet: DaxodWallet,
            daxod_user_id: dax.daxod_user_id
        };

        // Foydalanuvchi hisobini yangilash
        const updatedUser = await knex("users").update({ user_wallet: UserWallet }).where("user_id", id).returning("*");
        
        // Rasxod va daxod jadvallariga ma'lumotlar kiritish
        const data1 = await knex('rasxod').insert(rasxoNewEntry).returning("*");
        const data2 = await knex("daxod").insert(daxodNewEntry).returning("*");

        res.status(200).json({ message: 'Amal muvaffaqiyatli yakunlandi', users: updatedUser, data1: data1, data2: data2 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = hisobkitob;
