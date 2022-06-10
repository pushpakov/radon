const timeIpRoute = function (req, res){
  
    const date = new Date()
    let dateAndTime = date.getFullYear() + "-" + (date.getMonth()+ 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    console.log( dateAndTime + " ,", req.ip + " ,", req.route.path);
    res.send({msg: "Hello middleware"})
}

module.exports.timeIpRoute = timeIpRoute