//get all delete buttons
//create a click event
//remove the child element from the parent element
const deleteBtns = document.querySelectorAll(".delete");
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", (e) => {
    //get the parent element
    const listItem = e.target.parentNode;
    //remove the parent li element
    listItem.remove();
  });
});

// const editBtns = documents.querySelectorAll(".edit");
// editBtns.forEach((editBtn) => {
//   editBtn.addEventListener("click", (e) => {
//     //get the list element
//     const listItem = e.target.parentNode;
//     //get the(all) name input element
//     const nameInput = listItem.querySelectorAll(".name-input");
//     //get the name from the input element
//     const name = nameInput.innerText;
//     //prompt the user to enter a new name
//     const newName = prompt("enter new name", name);
//     nameInput.innerText = newName;
//   });
// });

// Get all edit buttons
const editBtns = document.querySelectorAll(".edit");

// Add click event listener to each edit button
editBtns.forEach((editBtn) => {
  editBtn.addEventListener("click", (e) => {
    // Get the parent li element
    const listItem = e.target.parentNode;

    // Get the name input element
    const nameInput = listItem.querySelectorAll(".name-input");

    // Get the name from the input element
    const name = nameInput.innerText;

    // Ask the user to enter a new name
    const newName = prompt("Enter a new name:", name);

    // Update the name in the input element
    nameInput.innerText = newName;
  });
});

// const list = document.getElementById("list");
// const nameInput = document.getElementById("name-input");
// const editBtn = document.getElementsByClassName("edit");

// //delete an item
// function deleteItem(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("delete")) {
//     const list = e.target.closest("li");
//     list.remove();
//   }
// }
// list.addEventListener("click", deleteItem);

// //edit an item
// //
// editBtn.addEventListener("click", (e) => ({
//     const edit = list.getElementById('span[id="name-input"]');
//     edit.value = "new"

// }));

// function editElement(e) {
//     if (e.target.classList.contains('edit'){
//         const edit = edit.value;
//         edit.textcontent = "newval"
//     })
// }
