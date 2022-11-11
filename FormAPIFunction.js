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

    console.log(clientForm);

    
    clientResponse(clientForm);
    console.warn('added', { clientForm });

}

clientResponse = async (myClientForm) => {

    await axios.post('https://vjaxow8lkh.execute-api.us-east-1.amazonaws.com/test-stage', myClientForm)
        .then(response => {
            console.log('res: ', response);
            console.log(`POST: user is added`, { myClientForm });
        })

        .catch(error => console.error(error));
};

//Links below are for APIs to use for testing and endpoint destination

// https://reqres.in/api/users

// https://vjaxow8lkh.execute-api.us-east-1.amazonaws.com/test-stage







