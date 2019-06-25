# Kuunika FHIR Patient Resources

## 1 Background

This repo is a simple CRUD API application based on the patient FHIR specification. This API is build with Nodejs and Express as well as Mongo DB for the persistent storage. 



For more information on the Patient FHIR Specification click the link below.

[FHIR Patient Specification](https://www.hl7.org/fhir/patient.html#Patient)



## 2 - Installation Service

**Required**

1. Mongo DB version 4.0.10
2. Nodejs version 10.16.0



Run:

```sh
npm install
```

After successfull installation:

```sh
npm run start
```

The application should be running at port 3000

```http
http://127.0.0.1:3000/api/patient
```



## 3 - Usage

The API is usable with the following request methods

**Get:**

```http
http://127.0.0.1:3000/api/patient
```

```http
http://127.0.0.1:3000/api/patient/{patientId}
```

**Post:**

```http
http://127.0.0.1:3000/api/patient
```

**Put:**

```http
http://127.0.0.1:3000/api/patient/{patientId}
```

**Delete:**

```http
http://127.0.0.1:3000/api/patient/{patientId}
```

