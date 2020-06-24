function onloadhtml(params) {
    console.log('%cVoici les params :%s','color:blue;font-weight:900;font-size:30pt',params)
    return '';
}
// var body=document.querySelector('body');
// body.addEventListener('load',onloadhtml);
var domUser=document.querySelectorAll('#tchat-users>.user');
domUser.forEach(function(element){
    element.addEventListener('click',function(evt) {
        console.log(evt);
        console.log(evt.target.innerHTML);
        // evt.target.innerHTML="Je suis pas ZOIDBERG"
    })
});
// document.querySelector('form').addEventListener('submit',(evt)=>{
//     console.log(evt);
//     console.log(this)

// })
document.querySelector('form').addEventListener('submit',function(evt){
    evt.preventDefault();
    //console.log(evt);
    // console.log(evt.target[0].value,evt.target[1].value)
    
    
    // mauvaise pratique car suppression des objets du dom dans la balise #tchat-message
    //et aussi de tous les events associés a cette balise
    // document.querySelector('#tchat-messages').innerHTML+=evt.target[0].value;
    if(evt.target[0].value.length >0)
    {
        var obj={message:evt.target[0].value};
        addMessageInMessages(obj);
        RestCrud.get(obj)
    }
    evt.target.reset();
   
});
function addMessageInMessages(objMessage,mine) {
     //bonne pratique pour la conservation de la structure html presente dans la balise conteneur
    var message=document.createElement('div');
    message.className="message";
    if(mine===true)message.classList.add('mine');
    message.innerHTML=objMessage.message;
    //console.log(message);
    document.querySelector('#tchat-messages').append(message);
}
function addMessagesInMessages(messages) {
    messages.forEach((e)=>{
        addMessageInMessages(e);
    })
    
}
function loadMessages(idDepart){
    var rest=new RestCrud(REST_ADDRESS);
    rest.get(addMessagesInMessages,'messages');
}
function addUsers(users){
    var listeUsersDom=document.querySelector('#tchat-users');
    var selectUserSender=document.querySelector('#adresse-to');
    users.forEach(u=>{
        // cnstruction de la div pour un user dans la liste de users
        var element = document.createElement('div');
        element.className="user";
        element.innerHTML='<img src="/img/'+u.img+'" alt="avatar de '+u.id+'"><div class="user-nick">'+u.id+'</div>';
        listeUsersDom.append(element);

        //ajout du user dans la liste du combobox(liste deroulante)
        var optionElement=document.createElement('option')
        optionElement.value=u.id;
        optionElement.innerHTML=u.id;
        selectUserSender.append(optionElement)
    })
}

function loadUsers() {
    var rest=new RestCrud(REST_ADDRESS);
    rest.get(addUsers,'users');
}
loadUsers();
loadMessages();