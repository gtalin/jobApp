const codepen = "https://codepen.io/gtalin/";
const codepenText = "Codepen link";

const twitter = "https://twitter.com/gtalinn";
const twitterText = "Twitter link";

const link1 = createLink(codepen, codepenText);
const link2 = createLink(twitter, twitterText);

let contact = document.createElement("p");
contact.appendChild(link1);
contact.appendChild(document.createElement("br"));
contact.appendChild(link2);

function createLink(link, text) {
  let a = document.createElement("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  a.textContent = text;
  return a;
}

module.exports = contact;
