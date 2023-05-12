function addUser() {
  // Get form values
  const nameInput = document.getElementById("name");
  const idNumberInput = document.getElementById("id-number");
  const countryInput = document.getElementById("country");
  const languageInput = document.getElementById("languages");

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

  // Clear form fields after submission
  nameInput.value = "";
  idNumberInput.value = "";
  countryInput.selectedIndex = 0;
  languageInput.selectedIndex = 0;
}
