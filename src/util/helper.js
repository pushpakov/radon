function getInfo() {
    let date = new Date()
    let month = date.getMonth()
    let batchInfo = "Radon, 3rd week, Wenesday, the topic being taught today git, gitHub, NodeJs the topic for today is Nodejs module system"

    console.log(date ,'\n',"MONTH-",month, '\n',batchInfo)
}

module.exports = getInfo()
