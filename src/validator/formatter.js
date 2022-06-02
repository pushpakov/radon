//function formatter() {
    const trim1 = function() {
        const check = "        functionUp       "
        console.log(check.trim())
    }

    const upper = function () {
        const check1 = "This is an awesome cohert by FunctionUp"
        console.log(check1.toLocaleUpperCase())
    }

    const lower = function () {
        const check2 = "This is an awesome cohert by FunctionUp"
        console.log(check2.toLocaleLowerCase())
    }




module.exports.tream = trim1()
module.exports.uppar = upper()
module.exports.lowar = lower()
