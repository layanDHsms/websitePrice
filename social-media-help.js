document.onkeyup = KeyCheck;

function KeyCheck(e)
{
   var KeyID = (window.event) ? event.keyCode : e.keyCode;
   if(KeyID == 113)
   {
     var msgText = ''
     var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  msgText = 'Hello, Good morning !'
} else if (curHr < 18) {
  msgText = 'Hello, Good afternoon !'
} else {
  msgText = 'Hello, Good evening !'
}
      navigator.clipboard.writeText(msgText);
     

   }
   
   if(KeyID == 115)
   {
     var msgText = 'Through the above product link I have sent either you can make a direct order through the website or place a manual order through message'
     
       navigator.clipboard.writeText(msgText);
   }
   
    if(KeyID == 119){
     var msgText = '𝗣𝗮𝘆𝗺𝗮𝗻𝘁 𝗠𝗲𝘁𝗵𝗼𝗿𝗱𝘀 \n\n💵  Cash on delivery\n\n🏦  Bank deposit\n\n💳  Online payment via the website'
    navigator.clipboard.writeText(msgText);
     
   }
   
   if(KeyID == 120){
     var msgText = '𝗗𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗱𝗲𝘁𝗮𝗶𝗹𝘀\n\n🚛  Cash on deliver order within 3–4 working days.\n\n🚚  Within two days, make a bank deposit or pay online (express delivery via CityPack).\n\n🆓  Orders of Rs 7,000 or more are eligible for free delivery via the website.\n\n💸  The delivery fee for the entire island is Rs. 400.\n\n↩️ We accept return and this is our Exchange policy - https://dresshub.lk/exchange-policy'
     navigator.clipboard.writeText(msgText);
     
   }

}


