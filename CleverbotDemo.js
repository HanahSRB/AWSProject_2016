<script type="text/javascript" src="cleverbot.io.js">
fskshjhrje3483958934

//Login
var bot = new cleverbot("m8K72v8IXG7zERyP", "7zYsacvo1YgeNaKlIq1HDhS85WUX3LO1");


//Create a session so you can access it later
bot.setNick("HanahBot2.0")


//Creating access to a clever bot session
bot.create(function (err, session) {
  // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

  // Woo, you initialized cleverbot.io.  Insert further code here
});



//Querying Clever Bot With The .ask() Method
bot.ask("Just a small town girl", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});


</script>