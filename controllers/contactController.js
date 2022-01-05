const reactDom = require('react-dom');
const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
    const {body} = req;
    try {
        const newContact= await Contact.create(
            {
                ...body
            });
        return res.status(200).json({
            message:'Contact was created', createdContact: newContact
        });
    }  catch (error) {
        console.log(error);
        return res.status(400).json({message:'error!', error:error});
    }

}

exports.listAllContacts = async (req, res) => {
    try {
        const contactList = await Contact.find();

        return res.status(200).json(contactList);
    } catch (error) {
        return res.status(400).json({message:'error!', error:error});
    }
}

exports.listAllPrivate = async (req, res) => {
    try {
        const privateContacts = await Contact.find({"customerType": "private"});
        return res.status(200).json(privateContacts);
    } catch (error) {
        return res.status(400).json({message:'error!', error:error})
    }
}

exports.listAllCommercial = async (req, res) => {
    try {
        const commercialContacts = await Contact.find({"customerType": "commercial"});
        return res.status(200).json(commercialContacts);
    } catch (error) {
        return res.status(400).json({message:'error!', error:error})
    }
}

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(req.params.id,{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            company: req.body.company,
            customerType: req.body.customerType, 
            addressStreet: req.body.addressStreet,
            addressCity: req.body.addressCity,
            addressPostcode: req.body.addressPostcode,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            salesFunnelStage: req.body.salesFunnelStage,
            maxEnergyGenPotentialkW: req.body.maxEnergyGenPotentialkW,
            energyDemandkWh: req.body.energyDemandkWh,
            gridOperator: req.body.gridOperator,
            salesNotes: req.body.salesNotes
        }, {new:true})
        if (!contact) {
            return res.status(404).json("contact not found")
        }

        return res.status(200).json({updatedContact:contact})
    } catch (error) {
        return res.status(400).json({message:'error!', error:error})
    }

}




//attempt to make a blanket search route - needs regex, will look at later
// exports.search = async (req, res) => {
//     const {params}=req;
//     try {
//         const customers = Contact.find(params);
//         return res.status(200).json(customers);
//     } catch (error) {
//         return res.status(400).json({message:'error', error:error})
//     }
// }


