if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
   }else{
     // not supported
     alert("Sorry, your browser doesn't support text to speech!");
   }

   var msg = new SpeechSynthesisUtterance();
   msg.text = "Hi! Welcome to All Ears.";
   window.speechSynthesis.speak(msg);


function say(){
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById("fname").value;
    msg.lang=(document.getElementById("language").value)
    window.speechSynthesis.speak(msg);
    }

function listen(){

    lang=language
    
    var speechRecognition = window.webkitSpeechRecognition

    var recognition = new speechRecognition()
    
    var textbox = $("#textbox")
    
    var content = ''
    
    recognition.continuous = true
    
    // recognition is started
    
    recognition.onspeechend = function() {
    
     instructions.text("No Activity")
    
    }
    
    recognition.onerror = function() {
    
     instruction.text("Try Again")
    
    }
    
    recognition.onresult = function(event) {
    
     var current = event.resultIndex;
    
     var transcript = event.results[current][0].transcript
    
    
    
     content += transcript
    
     textbox.val(content)
    
    }
    
    $("#listen").click(function(event) {
    
     recognition.start()
    
    })
    
    textbox.on('input', function() {
    
     content = $(this).val()
    
    })
    
}

