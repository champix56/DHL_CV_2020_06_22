function loadMessages(id,filterQuery) {
    //idDepart=(idDepart===undefined?0:idDepart)
    var rest = new RestCrud(REST_ADDRESS);
    rest.get(addMessagesInMessages,'messages',id,filterQuery)
}

function loadUsers() {
    var rest = new RestCrud(REST_ADDRESS);
    rest.get(addUsers, 'users');
}
function saveMessage(messageValue,toValue) {
    //reation de l'objet pour l'envoi au rest
    var outmess={message:messageValue,from:WHO_AM_I,userId:toValue};
    var rest = new RestCrud(REST_ADDRESS);
    //appel sur l'instance restcrud de la func post
    rest.post(addMessageInMessages, 'messages',outmess);
}
function initAutoRefresh(temps) {
    setInterval(function(e){
        loadMessages(undefined,'?id_gte='+idDepartSlice+1); 
        console.log('fonction intervalisée recherche message.id >'+window.idDepartSlice)
    },temps);
}
initAutoRefresh(3000);


loadUsers();

//loadMessages(undefined,'?id_gte=20');
loadMessages();
initEvent();

