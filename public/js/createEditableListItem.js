function createEditableListItem(list) {
  console.log("creating editable list item");
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.classList.add("input");
  //li.contentEditable = true;
  //li.textContent = "";
  //li.classList.add("input");
  li.appendChild(input);
  list.appendChild(li);

}

module.exports = createEditableListItem;
