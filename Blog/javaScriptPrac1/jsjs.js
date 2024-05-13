document.getElementById('student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let studentId = document.getElementById('ID').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    let table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = studentId;
    cell3.innerHTML = email;
    cell4.innerHTML = contact;
    cell5.innerHTML = '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';

    document.getElementById('student-form').reset();
});

function editRow(button) {
    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName('td');
    let name = cells[0].innerHTML;
    let studentId = cells[1].innerHTML;
    let email = cells[2].innerHTML;
    let contact = cells[3].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('ID').value = studentId;
    document.getElementById('email').value = email;
    document.getElementById('contact').value = contact;

    row.parentNode.removeChild(row);
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}