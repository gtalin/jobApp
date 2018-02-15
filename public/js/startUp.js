let startUptext = "Booting up application. This is an application for a front-end job";
var repeat;
function startUp() {
  return new Promise(function(resolve, reject) {
    simulateTyping(resolve, startUptext);
  });
  //need promise becuase simulateTyping is asynch and we want
  //the cursor on next line to appear only when we're done typing
  //simulateTyping(startUptext);
}

function simulateTyping(resolve, text){
	//document.getElementsByClassName("passage")[0].appendChild(p);
  let li= document.createElement("li");
  document.querySelector("ul").appendChild(li);
	var i = 1;
	if (i<text.length) {
		  repeat = setInterval(function(){
			li.innerHTML=text.slice(0,i);
			i++;
      if (i>text.length) {
        console.log("This aysnch is done");
      	clearInterval(repeat);
        resolve("done");
      }
		},10);
    }
}

module.exports = startUp;
