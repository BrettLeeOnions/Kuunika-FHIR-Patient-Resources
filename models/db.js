//Import the mongoose module
let mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = 'mongodb://127.0.0.1/sample_patient';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let Schema = mongoose.Schema;
//Schema Definition
let birthDateExtensionSchema = Schema({
    url:           String,
    valueDateTime: String
});
let birthDateExtension = mongoose.model('birthDateExtension',birthDateExtensionSchema);

let birthDateSchema = Schema({
    extension: [birthDateExtensionSchema]
});
let birthDate = mongoose.model('birthDate',birthDateSchema);

let addressPeriodSchema = Schema({
    start: String
});
let addressPeriod = mongoose.model('addressPeriod',addressPeriodSchema);  

let textSchema = Schema({
    status: String,
    div:    String
});
let text = mongoose.model('text',textSchema);

let familyExtensionSchema = Schema({
    url:         String,
    valueString: String
});
let familyExtension = mongoose.model('familyExtension',familyExtensionSchema);

let namePeriodSchema = Schema({
    end: String
});
let namePeriod = mongoose.model('namePeriod',namePeriodSchema);

let assignerSchema = Schema({
    display: String
});
let assigner = mongoose.model('assigner',assignerSchema);

let managingOrganizationSchema = Schema({
    reference: String
});
let managingOrganization = mongoose.model('managingOrganization', managingOrganizationSchema);

let contactTelecomSchema = Schema({
    system: String,
    value:  String
});
let contactTelecom = mongoose.model('contactTelecom',contactTelecomSchema);

let codingSchema = Schema({
    system: String,
    code:   String
});
let coding = mongoose.model('coding',codingSchema);

let typeSchema = Schema({
    code: [codingSchema]
});
let type = mongoose.model('type', typeSchema);

let familySchema = Schema({
    extension: [familyExtensionSchema]
});
let family = mongoose.model('family', familySchema);

let contactNameSchema = Schema({
    family:  String,
    _family: familySchema,
    given:   [String]
});
let contactName = mongoose.model('contactName',contactNameSchema);

let patientTelecomSchema = Schema({
    use:     String,
    system: String,
    value:  String,
    rank:   Number,
    period: namePeriodSchema
});
let patientTelecom = mongoose.model('patientTelecom', patientTelecomSchema);

let identifierSchema = Schema({
    use:      String,
    type:     typeSchema,
    system:   String,
    value:    String,
    period:   addressPeriodSchema,
    assigner: assignerSchema,
});
let identifier = mongoose.model('identifier',identifierSchema);

let nameElementSchema = Schema({
    use:     String,
    family:  String,
    given:   [String],
    period:  namePeriodSchema
});
let nameElement = mongoose.model('nameElement', nameElementSchema);

let addressSchema = Schema({
    use:        String,
    type:       String,
    text:      String,
    line:       [String],
    city:       String,
    district:   String,
    state:      String,
    postalCode: String,
    period:     addressPeriodSchema
});
let address = mongoose.model('address', addressSchema);

let contactSchema = Schema({
    relationship: [typeSchema],
    name:         contactNameSchema,
    telecom:      [contactTelecomSchema],
    address:      addressSchema,
    gender:       String,
    period:       addressPeriodSchema
});
let contact = mongoose.model('contact', contactSchema);

let patientSchema = Schema({
    resourceType:         String,
    text:                 [textSchema],
    identifier:           [identifierSchema],
    active:               Boolean,
    name:                 [nameElementSchema],
    telecom:              [patientTelecomSchema],
    gender:               String,
    birthDate:            String,
    _birthDate:           birthDateSchema,
    deceasedBoolean:      Boolean,
    address:              [addressSchema],
    contact:              [contactSchema],
    managingOrganization: managingOrganizationSchema
});

let patient = mongoose.model('patient',patientSchema);

//let patientJSON = require('./patient.json');

//let patientInstance = new patient(patientJSON);

/*
patientInstance.save((error) => {
    if(error) throw error;

    console.log('Saved');
});
*/

module.exports = {
    db,
    patient
};