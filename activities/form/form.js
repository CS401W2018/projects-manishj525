document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value, 10);
    if (!firstName || !lastName) {
        alert('First Name and Last Name cannot be blank.');
        return;
}

    if (!age || age < 18) {
        alert('You must be 18 years or older to submit this form.');
        return;
}
    const formData = {
        firstName: firstName,
        lastName: lastName,
        password: document.getElementById('password').value,
        remember: document.getElementById('remember').checked,
        state: document.getElementById('state').value,
        class: document.querySelector('input[name="class"]:checked') ? document.querySelector('input[name="class"]:checked').value: null
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit.json', true);
    xhr.setRequestHeader('Content-Type', "application/json; charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Form submitted successfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));
    alert(`Success: ${firstName} ${lastName}`);
});