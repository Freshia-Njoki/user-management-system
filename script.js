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
