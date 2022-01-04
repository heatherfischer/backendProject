const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
    const {body} = req;
    try {
        const newContact= await Contact.create(
            {
                firstName: body.firstName,
                lastName: body.lastName,
                company:  body.company,
                customerType: body.customerType, 
                addressStreet: body.addressStreet,
                addressCity: body.addressCity,
                addressPostcode: body.addressPostcode,
                phoneNumber: body.phoneNumber,
                email: body.email,
                salesFunnelStage: body.salesFunnelStage,
                maxEnergyGenPotentialkW: body.maxEnergyGenPotentialkW,
                peakEnergyDemandkW: body.peakEnergyDemandkW,
                gridOperator: body.gridOperator,
                salesNotes: body.salesNotes,
            });
        return res.status(200).json({
            message:'Contact was created', createdContact: newContact
        });
    }  catch (error) {
        console.log(error);
        return res.status(400).json({message:'error!', error:error});
    }

}