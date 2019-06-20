const {assert} = require('chai');
const {getAllPatientData} = require('../controllers/patient.controller');
const {getPatientById} = require('../controllers/patient.controller');
const {addPatient} = require('../controllers/patient.controller');
const {updatePatientinformation} = require('../controllers/patient.controller');
const {deletePatientInformation} = require('../controllers/patient.controller');

let patientJSON = require('./patientRecord');
let updatedPatientJSON = require('./patientRecord');

describe('Patient', function(){

    it('getAllPatientData() Shoulds get all patient records stored in the database', async function(){
        let result = await getAllPatientData();
        assert.isTrue(result.length > 0);
    });

    it('getPatientById() Should return a specific patient by their _id', async function(){
        let result = await getPatientById('5d0a33e4fbc975a9e011fe97');
        assert.isObject(result);
        assert.isNotNull(result.name.find((element) => element.family == "Chalmers"));
    });

    it('addPatient() Should return a id when creating a new patient record whe passed valid JSON',async function(){
        let result = await addPatient(patientJSON);
        assert.isNotNull(result._id);
    });

    it('updatePatientinformation() Function Should update the patient records gender', async function(){
        updatedPatientJSON.gender = 'female';
        let result = await updatePatientinformation('5d0b1d59384139bbd76285a5',updatedPatientJSON);
        console.log(result.gender);

        assert.equal(result.gender, 'female');
    });

    it('deletePatientInformation() Function Should change the patient record to inactive', async function(){
        let result = await deletePatientInformation('5d0b1e3412ba9ebbdacc9bce');
        //console.log(result);
        assert.equal(result.active, false);
    });
});