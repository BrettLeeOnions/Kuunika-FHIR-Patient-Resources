const db = require('../models/db').db;
const patient = require('../models/db').patient;
const acceptedSearchParametersArray = ['_id','_lastUpdated','_profile','_security','_text','_content','_list','_has','_type'];

function filterJSONSearchParameter(acceptedSearchParametersArray, queryStringJSON)
{
    let filteredJSON = {};
    for(element in queryStringJSON){
        if(queryStringJSON[element] != undefined && listOfFilds.includes(element)){
            filteredJSON[element] = queryStringJSON[element];
        }
    }
  return filterdJSON;
}

function getAllPatientData(queryStringJSON = {}){
    return new Promise((resolve,reject) => {
        patient.find({active: true},(err,res) =>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });
}

function getPatientById(_id){
    return new Promise((resolve, reject) => {
        patient.findById(_id, (err,res) =>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });
}

function addPatient(jsonBody)
{
    let patientInstance = new patient(jsonBody);
    let now = new Date();
    patientInstance['_lastUpdated'] = now;
    return new Promise((resolve,reject) =>{
        patientInstance.save((err,patientDocument) => {
            if(err){
                reject(err);
            }else{
                resolve(patientDocument);
            }
        })
    });
}

function updatePatientinformation(_id,jsonBody)
{
    delete jsonBody._id;
    let now = new Date();
    jsonBody['_lastUpdated'] = now;
    return new Promise((resolve,reject) => {
        patient.findByIdAndUpdate(_id,{$set:jsonBody},(err,res) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(res);
            }
        })
    });
}

function deletePatientInformation(_id)
{
    return new Promise((resolve,reject) => {

        let now = new Date();
        let changeActiveJSON = {active:false, _lastUpdated: now};

        patient.findByIdAndUpdate(_id,{$set:changeActiveJSON},(err,res) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(res);
            }
        });
    });
}

module.exports = {
    getAllPatientData,
    getPatientById,
    addPatient,
    updatePatientinformation,
    deletePatientInformation
}