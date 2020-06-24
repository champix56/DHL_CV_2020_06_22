function loadMessages(idDepart) {
    var rest = new RestCrud(REST_ADDRESS);
    rest.get(addMessagesInMessages, 'messages');
}

function loadUsers() {
    var rest = new RestCrud(REST_ADDRESS);
    rest.get(addUsers, 'users');
}
loadUsers();
loadMessages();
