function contact(){
    var bye = "Oh, I see - you do not want to chat anymore. Have a nice day"
    
    var chat1 = prompt("Hi! Dow you like to chat? If not, please feel free to write me an e-mail or connect with me on LikedIn. If you like to chat just type in 'YES'.")
    
    if (chat1 === "YES") {
        var chat2 = prompt("Cool, thanks! My name Joe. What's your name?")
        
        if (chat2 === "") {
            return alert(bye)
        } else {
            var chat3 = prompt("Hi " + chat2 + "! How are you?")
            
            if (chat3 === "") {
                return alert(bye)
            } else {
                prompt("Good to know! I'm fine. How can I help you?")
                alert("Oh, I'm sorry I cannot help you in this regard at the moment. Feel free to ask me via mail. Thanks for chatting. Have a nice day.")
            }
        } 
    } else {
        return alert("I see. As I said, please feel free to send me an e-mail or connect with me on LinkedIn.")
    }
}