let clientInfo = [];

let clientForm =
{
    id: Date().toString(),
    clientName: document.getElementById('firstname').value,
    clientSurname: document.getElementById("surname").value,
    clientEmail: document.getElementById("email").value,
    clientMessage: document.getElementById("messageBox").value
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sub-button").addEventListener('click', submitMessage);
});

var submitMessage = (e) => {

    e.preventDefault();
    clientInfo.push(clientForm);
    document.querySelector('form').reset();
    console.warn('added', { clientForm });
    clientResponse();

}

clientResponse = (clientForm) => {
    axios.post('https://reqres.in/api/users', clientForm)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            // appendToDOM(addedUser);
        })
        .catch(error => console.error(error));
};









