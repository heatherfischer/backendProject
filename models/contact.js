const {Schema,  model} = require('mongoose');

const contactSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: String,
    customerType: {
        type: String,
        enum: ['commercial', 'private']
    }, 
    addressStreet: String,
    addressCity: String,
    addressPostcode: {type: Number,
                minlength: [5, 'postal codes must be 5 numbers'],
            maxlength: [5, 'postal codes must be 5 numbers']},
    phoneNumber: {
        type: String},
    email: {type:String,
            required:true},
    salesFunnelStage: {
        type:String,
        enum:['awareness', 'interest', 'decision', 'action']
    },
    maxEnergyGenPotentialkW: Number,
    EnergyDemandkWh: Number,
    gridOperator: {
        type: String,
        enum: ['Amprion',
            'TenneT',
            '50Hertz',
            'TransnetBW GmbH',]
    },
    salesNotes: {type: String,
                maxlength:200}

});

const Contact = model ('Contact', contactSchema); 

module.exports = Contact;