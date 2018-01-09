let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here}
    if (answer == '' || attempt == '') {
        setHiddenFields();
    }
}

function setHiddenFields() {
    var answer = Math.floor(Math.random() * 10000).toString();
    while (answer.length < 4) {
        if (answer.length == 1) {
            answer = "000"+ answer;
        }
        if (answer.length == 2) {
            answer = "00"+ answer;
        }
        if (answer.length == 3) {
            answer = "0"+ answer;
        }
    }
    attempt = 0;
}

//implement new functions here
