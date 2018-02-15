function clearCallback(list) {
  /*while(list.firstChild) {
    list.removeChild(list.firstChild);
  }*/
  //with the following command, we don't need loop
  console.log("list before", list)
  list.innerHTML = "";
  //debugger;
  console.log("list is", list);
}
module.exports = clearCallback;
