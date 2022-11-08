


function checkAnswer() {

    var form = document.getElementById("form1");
    var answer = form.elements["name"].value;
    if (answer == "24") {
        document.getElementById("reveal").innerHTML = "Einstein in the making";

    } else if (answer <= "23") {
        document.getElementById("reveal").innerHTML = "Too low";

    } else if (answer >= "23") {
        document.getElementById("reveal").innerHTML = "Too high";

    } else if (answer == "null") {
        document.getElementById("reveal").innerHTML = "Please enter a number";

    }
    else {
        document.getElementById("reveal").innerHTML = "Try and guess again";

    }

}