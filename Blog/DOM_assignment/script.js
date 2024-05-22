document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const studentsTableBody = document.querySelector("#studentsTable tbody");
    let students = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const className = document.getElementById("class").value;
        const address = document.getElementById("address").value;
        const studentId = document.getElementById("sid").value;
        const contact = document.getElementById("contact").value;
        const email = document.getElementById("email").value;
        
        const student = {
            id: Date.now().toString(),
            name,
            className,
            address,
            studentId,
            contact,
            email
        };

        students.push(student);
        displayStudents();
        form.reset();
    });

    function displayStudents() {
        studentsTableBody.innerHTML = "";
        students.forEach(student => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.className}</td>
                <td>${student.address}</td>
                <td>${student.studentId}</td>
                <td>${student.contact}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="editStudent('${student.id}')">Edit</button>
                    <button onclick="deleteStudent('${student.id}')">Delete</button>
                </td>
            `;
            studentsTableBody.appendChild(row);
        });
    }

    window.editStudent = (id) => {
        const student = students.find(student => student.id === id);
        if (student) {
            document.getElementById("name").value = student.name;
            document.getElementById("class").value = student.className;
            document.getElementById("address").value = student.address;
            document.getElementById("sid").value = student.studentId;
            document.getElementById("contact").value = student.contact;
            document.getElementById("email").value = student.email;
            
            deleteStudent(id);
        }
    };

    window.deleteStudent = (id) => {
        students = students.filter(student => student.id !== id);
        displayStudents();
    };
});
