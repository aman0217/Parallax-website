function submitForm() {
    var username = document.getElementById("username").value;
    var feedback = document.getElementById("feedback");
    if (username === "" ) {
        feedback.textContent = "Please fill out field.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Thank you, " + username + "! Welcome to this page:To see the Parallax Scrolling click the below button.";
        feedback.style.color = "green";
    }
}
function changeBackgroundColor() {
    // Generate random colors
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
