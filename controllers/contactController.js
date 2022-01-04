const Contact = require('../models/Customer');

exports.createContact = async (req, res) => {
    const {body} = req;
    try {

    }  catch (error) {
        console.log(error);
        return res.status(400).json({message:'error!', error:error});
    }

}