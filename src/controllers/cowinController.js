let axios = require("axios")

// -WRITE A GET API TO GET THE LIST OF ALL THE 
//"vaccination sessions by district id" for any given district id and for any given date


const getVaccinationSession = async function(req, res) {
    try{
        let district = req.query.district_id
        let date = req.query.date
        var options = {
            method: "get",
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
            
        }
        let result = await axios(options) 
        let data= result.data
        res.status(200).send({msg : data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
    
}

module.exports.getVaccinationSession= getVaccinationSession
