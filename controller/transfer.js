const { createTransferRequest, getAllTransferRequest, updateTransferRequest } = require("../service/transfer")

const createTransfer = async (req, res, next) => {
    try {
        const { db, body } = req
        const response = await createTransferRequest({ db, ...body })
        res.status(201).json({ message: "Transfer request created", data: response })
    } catch (error) {
        next(error)
    }
}

const getAllTransfer = async (req, res, next) => {
    try {
        const { db } = req
        const transferRequests = await getAllTransferRequest({ db })
        res.status(200).json({ data: transferRequests })
    } catch (error) {
        next(error)
    }
}

const updateTransferStatus = async (req, res, next) => {
    try {
        const { db, params, body } = req
        await updateTransferRequest({ db, id: params.id, ...body })
        res.status(200).json({ message: "Transfer request updated" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createTransfer,
    getAllTransfer,
    updateTransferStatus
}