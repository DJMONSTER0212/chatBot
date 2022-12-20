function talk(){
    var know={
        'hi':'Hello what can I do for you',
        'who are you':"Hello, DJ here",
        'How are you':'I am Fine',
        'What can you do':'I can Talk with you whenever you want!',
        'How may Follower you have':'I have soo many followers!!',
        'ok':'Thankyou So much',
        'I am feeling horny':'Toh muthmaar aur Soojaa',
        'what is your age':'Never ask a girl about his age',
        'are you hot':'Yupp I am really feeling hot!!',
        'Bye':'Ok byee see you soon',
        'what do you feel about me':'You are cute'
    }; 
    var user = document.getElementById('userbox').value;
    document.getElementById('chatLog').innerHTML= user + '<br>';
    if(user in know){
        document.getElementById('chatLog').innerHTML= know[user]+'<br>';
    }
    else {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>"
    }
    document.getElementById('userbox').value = "";
};