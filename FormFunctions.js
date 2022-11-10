let clientInfo = [];



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sub-button").addEventListener('click', submitMessage);
});

var submitMessage = () => {

    let clientForm =
    {
        id: Date().toString(),
        clientName: document.getElementById('firstname').value,
        clientSurname: document.getElementById("surname").value,
        clientEmail: document.getElementById("email").value,
        clientMessage: document.getElementById("messageBox").value
    }

    // e.preventDefault();
    clientResponse();
    clientInfo.push(clientForm);
    console.warn('added', { clientForm });
    // document.querySelector('form').reset();

}

clientResponse = async (clientForm) => {
    await axios.post('https://vjaxow8lkh.execute-api.us-east-1.amazonaws.com/test-stage', clientForm)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            // appendToDOM(addedUser);
        })
        .catch(error => console.error(error));
};









