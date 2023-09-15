const Baxo = require("../models/evaluation.model")
const vaqt = require("../models/examCreate.model")

const create = async(req, res) => {
    try {
        const {imtihon_id, user_id, baxosi,examsCreate_id} = req.body;        
        const data = await Baxo.create({ imtihon_id, user_id, baxosi, examsCreate_id})

        res.status(200).send({message: 'Success', data: data});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req, res) => {
    try {
        const data = await Baxo.find().populate("imtihon_id").populate("user_id").populate("examsCreate_id")

        res.status(200).send({ data: data })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const findOne = async(req, res) => {
    try {
        const {id} = req.params
        const data = await Baxo.findById({_id: id})
        .populate("imtihon_id")
        .populate("user_id")
        .populate("examsCreate_id")

        res.status(201).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// const update = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { status, deadline } = req.body;
        
//         // Imtihon vaqti bazadan olinadi
//         const qwer = await vaqt.findOne();
//         const examStartTime = new Date(qwer.deadline); // Vaqtni Date objektiga aylantirish
        
//         const currentTime = new Date();
//         const timeDifference = (currentTime - examStartTime) / (60 * 1000); // Vaqtni minutlarda hisoblash

//         let baxosi = 70; 
//         const fiveMinutes = 5; 

//         if (timeDifference > fiveMinutes) {
//             const minutesLate = Math.floor(timeDifference);
//             const deductions = Math.floor(minutesLate / fiveMinutes) * 5;
//             console.log('deductions: ', deductions);
//             baxosi = 70 - deductions;
//         }
        
//         // Baxoni yangilash va statusni o'zgartirish
//         const data = await Baxo.findByIdAndUpdate(id, { baxosi, status });

//         res.status(201).json({ message: data });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }


const calculatePenalty = (examStartTime) => {
    const currentTime = new Date();
    const timeDifference = (examStartTime - currentTime  ) / (60 * 100000); // Vaqtni minutlarda hisoblash

    const fiveMinutes = 5;
    let baxosi = 70;

    if (timeDifference > fiveMinutes) {
        let minutesLate = Math.floor(timeDifference);
        let deductions = Math.floor(minutesLate / fiveMinutes) * 5;
        baxosi = 70 - deductions;
    }

    console.log('baxosi: ', baxosi);
    return baxosi;
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, deadline } = req.body;

        // Imtihon vaqti bazadan olinadi
        const qwer = await vaqt.findOne();
        const examStartTime = new Date(qwer.deadline); // Vaqtni Date objektiga aylantirish

        // Intixonni hisoblash
        const baxosi = calculatePenalty(examStartTime);

        // Baxoni yangilash va statusni o'zgartirish
        const data = await Baxo.findByIdAndUpdate(id, { baxosi, status });

        res.status(201).json({ message: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    create,
    find,
    findOne,
    update,
}