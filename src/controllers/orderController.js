const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


const createOrder = async function (req, res) {
    let data = req.body
    let checkUserId = data.userId
    let checkProductId = data.productId
    if (!checkUserId || !checkProductId) {
       return res.send({ msg: "Please enter both userId and productId" })
    }

    let validUserId = await userModel.findById(checkUserId)
    if (!validUserId) {
        return res.send({ msg: "userId is not correct" })
    }

    let validProductId = await productModel.findById(checkProductId)
    if (!validProductId) {
            return res.send({ msg: "productId is not correct" })
    } else {
        let newOrder = await orderModel.create(data)
        if (req.headers.isfreeappuser === "true") {
            await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
            res.send({ msg: newOrder })
        } else {
            if (checkUserId.balance >= checkProductId.price) {
                await userModel.updateOne({ _id: data.userId }, { $inc: { balance: -price } }, { new: true })
                await orderModel.updateOne({ _id: newOrder._id }, { $set: { amount: price } }, { new: true })
                res.send({ msg: newOrder });
            }
            else res.send({ msg: "user doesn't have enough balance" })
        }
    }

}
module.exports.createOrder = createOrder 