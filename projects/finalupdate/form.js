document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const comments = document.getElementById("comments").value;
    const password  = document.getElementById("password").value;

    if (!firstName || !lastName) {
        alert("First Name and Last Name are required.");
        return;
    }

    if (!age || age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    const formData = {
        firstName,
        lastName,
        age,
        comments,
        password
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerHTML = `<p>${response.message}</p>`;
                document.getElementById("myForm").innerHTML = "<p>Form submitted successfully!</p>";
            } else {
                alert('Error submitting form.');
            }
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
});