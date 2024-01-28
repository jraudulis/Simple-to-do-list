//DOM selectors for text input enter button and ul list
const input = document.getElementById("input");
const enter = document.getElementById("btn");
const ul = document.getElementById("list");

//Function which returns length of input characters
function inputLength(){
  return input.value.length;
} 

//Function to attach Delete and Done buttons with corresponding click events
function delDoneButtons(li){
 const del = document.createElement("button");
 del.appendChild(document.createTextNode("Delete"));

 const done = document.createElement("button");
 done.appendChild(document.createTextNode("Done"));

 del.classList.add("del-button");
 done.classList.add("done-button");

 li.appendChild(del);
 li.appendChild(done);

del.addEventListener("click", function(){
 del.parentNode.remove(li);
});

done.addEventListener("click", function(){
 this.parentNode.classList.toggle("finished");
});

}

//Function for creating li element with input value
function createLi() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  delDoneButtons(li);
  ul.appendChild(li);
  input.value = "";
}

//Function for adding li elements after click
function addLiAfterClick() {
 if ( inputLength() ) {
   createLi();
 }
}

//Function for adding li element after Enter keypress
function addLiAfterKey(event){
 if ( inputLength() && event.key === "Enter") {
   createLi();
  }
}

//Adding click event for enter button with click function
//Adding key press event for input field with key press function
enter.addEventListener("click", addLiAfterClick);

input.addEventListener("keydown", addLiAfterKey);