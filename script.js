// Initialize global variables
let editingRow = null;

// Add User function
function addUser() {
  // Get form values
  const nameInput = document.getElementById("name");
  const idNumberInput = document.getElementById("id-number");
  const countryInput = document.getElementById("country");
  const languageInput = document.getElementById("languages");

  // If editingRow is not null, update the existing row
  if (editingRow !== null) {
    editingRow.cells[0].textContent = nameInput.value;
    editingRow.cells[1].textContent = idNumberInput.value;
    editingRow.cells[2].textContent = countryInput.value;
    editingRow.cells[3].textContent = languageInput.value;
    editingRow = null;
  } else {
    // Creating new row and cells for each field in the table
    const tableBody = document.getElementById("user-list");
    const newRow = tableBody.insertRow(-1);
    const nameCell = newRow.insertCell(0);
    const idNumberCell = newRow.insertCell(1);
    const countryCell = newRow.insertCell(2);
    const languageCell = newRow.insertCell(3);
    const actionsCell = newRow.insertCell(4);

    // Populate cells with form values and buttons for edit and delete
    nameCell.textContent = nameInput.value;
    idNumberCell.textContent = idNumberInput.value;
    countryCell.textContent = countryInput.value;
    languageCell.textContent = languageInput.value;
    actionsCell.innerHTML =
      '<button onclick="editUser(this)">Edit</button> <button onclick="deleteUser(this)">Delete</button>';
  }

  // Clear form fields after submission
  nameInput.value = "";
  idNumberInput.value = "";
  countryInput.selectedIndex = 0;
  languageInput.selectedIndex = 0;
}

// Edit User function
function editUser(button) {
  const row = button.parentNode.parentNode;
  const name = row.cells[0].textContent;
  const idNumber = row.cells[1].textContent;
  const country = row.cells[2].textContent;
  const language = row.cells[3].textContent;

  // Fill the form with the values of the selected row
  document.getElementById("name").value = name;
  document.getElementById("id-number").value = idNumber;
  document.getElementById("country").value = country;
  document.getElementById("languages").value = language;

  // Set editingRow to the selected row
  editingRow = row;
}

// Delete User function
function deleteUser(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}

// // Define an array to store the user data
// var users = [];

// // Function to add a user to the array
// function addUser() {
//   // Get the input values
//   var name = document.getElementById("name").value;
//   var idNumber = document.getElementById("id-number").value;
//   var country = document.getElementById("country").value;
//   var languages = document.getElementById("languages").value;

//   // Add the user data to the array
//   users.push({
//     name: name,
//     idNumber: idNumber,
//     country: country,
//     languages: languages,
//   });

//   // Clear the form
//   document.getElementById("name").value = "";
//   document.getElementById("id-number").value = "";
//   document.getElementById("country").value = "";
//   document.getElementById("languages").value = "";

//   // Refresh the user list
//   refreshUserList();
// }

// // Function to delete a user from the array
// function deleteUser(index) {
//   // Remove the user data from the array
//   users.splice(index, 1);

//   // Refresh the user list
//   refreshUserList();
// }

// // Function to edit a user in the array
// function editUser(index) {
//   // Get the user data from the array
//   var user = users[index];

//   // Update the user data with the input values
//   user.name = document.getElementById("edit-name").value;
//   user.idNumber = document.getElementById("edit-id-number").value;
//   user.country = document.getElementById("edit-country").value;
//   user.languages = document.getElementById("edit-languages").value;

//   // Refresh the user list
//   refreshUserList();

//   // Hide the edit form
//   document.getElementById("edit-form").style.display = "none";
// }

// // Function to display the user data in a table
// function refreshUserList() {
//   var userList = document.getElementById("user-list");
//   userList.innerHTML = "";
//   for (var i = 0; i < users.length; i++) {
//     var user = users[i];
//     var row = document.createElement("tr");
//     var nameCell = document.createElement("td");
//     var idNumberCell = document.createElement("td");
//     var countryCell = document.createElement("td");
//     var languagesCell = document.createElement("td");
//     var actionsCell = document.createElement("td");
//     var editButton = document.createElement("button");
//     var deleteButton = document.createElement("button");
//     editButton.innerHTML = "Edit";
//     editButton.onclick = (function (index) {
//       return function () {
//         showEditForm(index);
//       };
//     })(i);
//     deleteButton.innerHTML = "Delete";
//     deleteButton.onclick = (function (index) {
//       return function () {
//         deleteUser(index);
//       };
//     })(i);
//     nameCell.innerHTML = user.name;
//     idNumberCell.innerHTML = user.idNumber;
//     countryCell.innerHTML = user.country;
//     languagesCell.innerHTML = user.languages;
//     actionsCell.appendChild(editButton);
//     actionsCell.appendChild(deleteButton);
//     row.appendChild(nameCell);
//     row.appendChild(idNumberCell);
//     row.appendChild(countryCell);
//     row.appendChild(languagesCell);
//     row.appendChild(actionsCell);
//     userList.appendChild(row);
//   }
// }

// // Function to show the edit form
// function showEditForm(index) {
//   // Get the user data from the array
//   var user = users[index];

//   // Set the input values in the edit form
//   document.getElementById("edit-name").value = user.name;
//   document.getElementById("edit-id-number").value = user.idNumber;
//   document.getElementById("edit-country").value = user.country;
//   document.getElementById("edit-languages").value;
// }
