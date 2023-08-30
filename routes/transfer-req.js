const { Router } = require('express');
const { createTransfer, getAllTransfer, updateTransferStatus } = require('../controller/transfer.js');
const { authorizationMiddleware } = require('../middleware/auth.js');

const transfeReqRouter = Router();

transfeReqRouter.post('/', authorizationMiddleware({ roles: ['maker', 'approver'] }), createTransfer);
transfeReqRouter.get('/', authorizationMiddleware({ roles: ['maker', 'approver'] }), getAllTransfer);
transfeReqRouter.patch('/:id', authorizationMiddleware({ roles: ['approver'] }), updateTransferStatus);

module.exports = transfeReqRouter;