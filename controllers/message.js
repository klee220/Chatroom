// Controller handler to handle functionality in home page
// const Message = require('../models/Messages')
// // Example for handle a get request at '/' endpoint.

function getMessage(request, response){
    response.render('Message', {title: 'Messages', msgName: request.params.msgName, isAvailable: true});
}

module.exports = {
    getMessage
};