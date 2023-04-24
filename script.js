
const textField = document.querySelector("#myTodo");

const myForm = document.querySelector("#myForm");

const msg= document.getElementById("msg");

const list= document.querySelector(".toDoContainer");

const clearButton = document.querySelector("#clearBtn");

const hide = document.querySelector("#hideBtn");


myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

const formValidation = () => {
  if(textField.value === ""){
 msg.innerHTML = "To do cannot be empty";
    console.log("failure");
  }
  else{
    console.log("success");
    msg.innerHTML = ""
    acceptData();
  }
}

const data  = {};

const acceptData = () => {
  data["todo"]= textField.value;
  console.log(data);
  createPost();
}

const createPost = () => {
  list.innerHTML += `
<div class = "edBtn"> 
<li>${data.todo}</li>
<span>
 <button class ="edit">
      <i onClick = "editIcon(this)" class="fa-sharp fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
       <i onClick = "deleteIcon(this)"
       class="fa-solid fa-trash-can"></i>
    </button>
</span>
</div>
`
  textField.value=""
}

const deleteIcon = (e) => {
  e.parentElement.parentElement.parentElement.remove();
}

const editIcon = (e) => {
  textField.value = e.parentElement.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.parentElement.remove();
}

clearButton.addEventListener("click", () => {

[...list.children].forEach(clearButton => {list.removeChild(clearButton)});
})

hide.addEventListener("click", () => {
  if(list.style.display === "none"){
    list.style.display = "block"
  hide.innerHTML ="Hide list"
  }
  else{
    list.style.display = "none";
hide.innerHTML =" Show list";
  }
})


