function contact(){
    var bye = "Oh, I see - you do not want to chat anymore. Have a nice day"
    
    var chat1 = alert(prompt("Hi! Dow you like to chat? If not, please feel free to write me an e-mail or connect with me on LikedIn. If you like to chat just type in 'YES'."))
    
    if chat1 = "YES" {
        var chat2 = alert(prompt("Cool, thanks! My name Joe. What's your name?"))

        if chat2 ="" {
            alert(bye)
            return
        }else {
            var chat3 = alert(prompt("Hi" + chat2 + "How are you?"))

            if chat3 = "" {
                alert(bye)
                return
            }else{
                var chat4 = alert(prompt("Good to know! I'm fine. How can I help you?"))
                alert("Oh, I'm sorry I cannot help you in this regard.")
            }
        }
    }
}

function chatme(){
    var cya = "Oh, I see - you do not want to chat anymore. Have a nice day!"

    var c1 = alert(prompt("Hi! Dow you like to chat? If not, please feel free to write me an e-mail or connect with me on LikedIn. If you like to chat just type in 'YES'."))
}