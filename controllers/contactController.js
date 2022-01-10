
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

//route for listing all contacts 

exports.listAllContacts = async (req, res) => {
    try {
        const contactList = await Contact.find();

        return res.status(200).json(contactList);
    } catch (error) {
        return res.status(400).json({message:'error!', error:error});
    }
}

//route for listing all private contacts

exports.listAllPrivate = async (req, res) => {
    try {
        const privateContacts = await Contact.find({"customerType": "private"});
        return res.status(200).json(privateContacts);
    } catch (error) {
        return res.status(400).json({message:'error!', error:error})
    }
}

//route for listing all commercial contacts

exports.listAllCommercial = async (req, res) => {
    try {
        const commercialContacts = await Contact.find({"customerType": "commercial"});
        return res.status(200).json(commercialContacts);
    } catch (error) {
        return res.status(400).json({message:'error!', error:error})
    }
}

//Route to edit contact

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

//Delete Request

exports.deleteContact = async(req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if(!contact) {
            //if contact doesn't exist
            return res.status(404).json('contact not found');
        }
            return res.status(200).json('contact deleted');
    } catch (error){
        return res.status(500).json({message:'Error occurred', error:error}) }
}