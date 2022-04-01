const empModel = require("../models/emp_Model")

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const create_Emp = async function (req, res) {
    try {
        const requestBody = req.body
        
        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters.' })
        }

        const { emp_name, date_of_birth, designation } = requestBody

        if (!isValid(emp_name)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide valid emp_name' })
        }
        if (!isValid(date_of_birth)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide valid date_of_birth' })
        }
        if (!isValid(designation)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide valid designation' })
        }
        
        const empDetails = { emp_name, date_of_birth, designation }

        let savedemp = await empModel.create(empDetails)
        res.status(201).send({ status: true, message: "created successfully", data: savedemp })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}
module.exports.create_Emp = create_Emp



const getemp = async function (req, res) {
    try {
        let body = req.query;
        
        let foundemp = await empModel.find(body).sort({emp_name:1})
        if (foundemp) {
            res.status(200).send({ status: true, data: foundemp });
        }
        else {
            res.status(400).send({ status: false, msg: "No documents found" });
        }
    }
    catch (err) {
        res.status(500).send({ msg: "Some error occured" });
    }
}

module.exports.getemp = getemp
