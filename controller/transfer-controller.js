const getAllTransfer = async (req, res) => {
    try {
        const transferList = await req.db.collection('transfers').find().toArray()

        res.status(200).json({
            message: "Transfer successfully retrieved",
            data: transferList
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createTransfer = async (req, res) => {
    const { amount, currency, sourceAccount, destinationAccount } = req.body

    try {
        const newTransfer = await req.db.collection('transfers').insertOne({ amount, currency, sourceAccount, destinationAccount })

        res.status(200).json({
            message: "Transfer successfully created",
            data: newTransfer
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllTransfer,
    createTransfer
}