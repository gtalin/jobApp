import '../css/appStyles.scss';
const echoCallback = require('./echoCallback');
const clearCallback = require('./clearCallback');
const contact = require('./contact');
const portfolio = require('./portfolio');
const help = require('./help');
const aboutme = require('./aboutme');
const startUp = require('./startUp');
//const inputLine = require('./createEditableListItem');



const commands = {"aboutme": aboutme,
"echo":echoCallback,
"clearUp":clearCallback, "portfolio": portfolio,
"contact": contact, "help": help,
"startUp":startUp, "errormsg":"Command not found"};


function checkInput (list,input) {
	let li= document.createElement("li");
	let textNode, toAppend;

	switch(input) {
		case "":
		  textNode = document.createTextNode("");
			appendOutput(list, textNode);
		  break;
		case "help":
		  textNode = document.createTextNode(commands.help);
			appendOutput(list, textNode);
		  break;
		case "about-me":
		  textNode = document.createTextNode(commands.aboutme);
			appendOutput(list, textNode);
		  break;
		case "clear":
		  commands.clearUp(list);
			createEditableListItem(list)
		  break;
		case "restart":
		  commands.clearUp(list);
		  //commands.startUp();
			init();
		  break;
		case "portfolio":
			toAppend = commands.portfolio();//this is an a element
			appendOutput(list,toAppend);
		  break;
		case "contact":
			/*textNode = document.createTextNode(contact);
			li.appendChild(textNode);
			list.appendChild(li);*/
			toAppend = commands.contact;
			appendOutput(list,toAppend);
		  break;
		default:
		  console.log();
			textNode = document.createTextNode(input+": "+commands.errormsg);
			appendOutput(list,textNode);
	}

}

function appendOutput(list, toAppend) {
	console.log(toAppend, typeof toAppend);
	//toAppend = ">".concat(toAppend);
	let li= document.createElement("li");
	li.appendChild(toAppend)
	list.appendChild(li);
}

function createEditableListItem(list) {
  console.log("creating editable list item");
  let li = document.createElement("li");
  let input = document.createElement("input");
  li.classList.add("input");
	li.appendChild(input);
	list.appendChild(li);
	input.focus();
  //li.contentEditable = true;
  //li.textContent = "";
  li.classList.add("input");//so thatwe can have a :before tag like $

	input.addEventListener("keyup", enterKey);

	function enterKey(e) {
		if (parseInt(e.keyCode) === 13) {
			e.preventDefault();
			console.log(e.target.value);
			let input = e.target.value.trim();
			//e.target.value = "";
			//var p = document.createElement("p");
			//let list = document.querySelector(".output");

			//resolve the command
			//make the input tag uneditable +
			//removeEventListener from it
			//create a new input tag and append it to screen.
			//Do something with the entered command
			checkInput(list,input);
			console.log("this is", this);

			//make that input field read only and removeEventListener
			this.readOnly = true;
			this.removeEventListener("keyup", enterKey);

			//create One more input field and append it to ul
			if (input!=="clear" && input!=="restart")
				createEditableListItem(list);
		}
	}

}

function init() {
	let list = document.querySelector(".output");
	commands.startUp().then((message)=>{
		console.log(message, "Now execute the chained function");
		createEditableListItem(list)
		//commands.createInput(list);

		//The input tage will be created only after the startUp
		//screen
		//let inputTag = document.querySelector(".input");
		//console.log(inputTag);

		});

	//});
//commands.createInput(list);



}

init();
