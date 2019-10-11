
var messages = [], 
lastUserMessage = "", 
botMessage = "", 
botName = 'Chatbot', 
talking = true; 

function chatbotResponse(lastUserMessage) {
	
	var request = new XMLHttpRequest();
	
	request.open('GET', 'http://127.0.0.1:5002/?question="'+lastUserMessage+'"', true);

	request.onload = function () {
	  var data = JSON.parse(this.response);

	  if (request.status >= 200 && request.status < 400) {
		botMessage = data;
		messages.push("<b>" + botName + ":</b> " + botMessage);
		// says the message using the text to speech function written below
		Speech(botMessage);
		//outputs the last few array elements of messages to html
		for (var i = 1; i < 8; i++) {
		  if (messages[messages.length - i])
			document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
		}
		
	  } else {
		console.log('error');
		botMessage = "Error";
	  }
	  
	}

	request.send();
  
}

function newEntry() {

  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    
    document.getElementById("chatbox").value = "";
    
    messages.push("<b>User:</b> " + lastUserMessage);
    
    chatbotResponse(lastUserMessage);
    
    
  }
}

function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    startSpeaking(say);
  }
}

document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}