var question = "Are you interested in services for: cats or dogs?";
var answer = prompt(question);

if (answer == "cats") {
    alert("Great! Please navigate to our 'Cats' section for more information.");
} else if (answer == "dogs") {
    alert("Fantastic! Please navigate to our 'Dogs' section for more information.");
} else if (answer == "snakes") {
    alert("Sorry, we can't help you here!");
} else if (answer == "not sure") {
    alert("No problem. Have a look around our site and this might help you to decide!");
} else {
    alert("I don't understand. Please have a look around our site to help you decide.");
}

