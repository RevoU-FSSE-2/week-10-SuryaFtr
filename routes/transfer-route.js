const { Router } = require('express')
const { getAllTransfer, createTransfer } = require('../controller/transfer-controller.js')

const transferRouter = Router()

transferRouter.get('/', getAllTransfer)
transferRouter.post('/', createTransfer)

module.exports = transferRouter