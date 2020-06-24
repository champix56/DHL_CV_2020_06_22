function loadMessages(idDepart) {
    var rest = new RestCrud(REST_ADDRESS);
    rest.get(addMessagesInMessages, 'messages');
}

function loadUsers() {
    var rest = new RestCrud(REST_ADDRESS);
    rest.get(addUsers, 'users');
}
function saveMessage(messageValue,toValue) {
    var outmess={message:messageValue,from:WHO_AM_I,userId:toValue};
    var rest = new RestCrud(REST_ADDRESS);
    rest.post(addMessageInMessages, 'messages',outmess);
}

loadUsers();
loadMessages();
