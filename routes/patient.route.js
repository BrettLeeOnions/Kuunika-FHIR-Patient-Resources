const express                   = require('express');
const router                    = express.Router();
const patientController         = require('../controllers/patient.controller');
const getAllPatientData         = patientController.getAllPatientData;
const getPatientById            = patientController.getPatientById;
const addPatient                = patientController.addPatient;
const updatePatientinformation  = patientController.updatePatientinformation;
const deletePatientInformation  = patientController.deletePatientInformation;




router.get('/',async (req,res,next) =>{
    console.log(req.query);
    try {
        let result = await getAllPatientData();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error:"There was an internal error with the server"});
        console.log(error);
    }
});

router.get('/:id',async (req,res,next) =>{
    try {
        let result = await getPatientById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.json({error:"There was an internal error with the server"});
        console.log(error);
    }
})

router.post('/',async (req,res,next) =>{
    try {
        let result = {success: "Patient Record Added"};
        result['addPatient'] = await addPatient(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.json({error: "There was an issue with the request"});
        console.log(error);
    }
});

router.put('/:id',async (req,res,next) =>{
    try {
        let result = {success: "Patient Record Successfully Updated"}
        result['updated'] = await updatePatientinformation(req.params.id,req.body);
        res.status(200).json(result);
    } catch (error) {
        res.json({error: "There was an issue with the request"});
        console.log(error);
    }
});

router.delete('/:id',async (req,res,next) =>{
    try {
        let result = {success: "Patient Record Successfully Removed"}
        result['deleted'] = await deletePatientInformation(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.json({error: "There was an issue with the request"});
        console.log(error);
    }
});

module.exports = router;