let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let Result = document.getElementById('results');
let code = document.getElementById('code');
let replay_div = document.getElementById('replay-div');
let guessing_div = document.getElementById('guessing-div');
function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here}
    if (answer == '' || attempt == '') {
        setHiddenFields();
    }
    if (!validateInput(input.value)) {
    	return false;
    }
    attempt.value += 1;
    if (getResults(input)) {
   		setMessae("You Win! :)");
   		showAnswer(true);
   	} else if (attempt.value > 10) {
   		setMessae("You Lose! :(");
   		showAnswer(false);
   	} else {
   		setMessae("Incorrect, try again.");
   	}
   	showReplay();
}

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while (answer.length < 4) {
        answer = "0"+ answer;
    }
    attempt.value = 0;
}

function setMessae(s) {
	message.innerHTML = s;
}

function validateInput(p){
	if (p.length == 4) {
		return true;
	} else {
		setMessae("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function getResults(p) {
	var str = "<div class='row'><span class='col-md-6'>" + p + "</span><div class='col-md-6'>";
	var count = 0;
	for (var i = 0; i < 4 ; i ++) {
		for (var j = 0; j < 4; j++) {
			if (p.split('')[i] = answer.split('')[j] ){
				if (i == j) {
					str += "<span class='glyphicon glyphicon-ok'></span>";
					count++;
					continue;
				} else {
					str += "<span class='glyphicon glyphicon-transfer'></span>";
					continue;
				}
			} else {
				str += "<span class='glyphicon glyphicon-remove'></span>";
			}	
		}
	}
	str += "</div>";
	Result.innerHTML += str;
	return count == 4;
}

function showAnswer(b) {
	code.innerHTML = answer.value;
	if (b) {
		code.className += " success";
	} else {
		code.className += " failure";
	}
}

function showReplay() {
	replay_div.style.display = "block";
	guessing_div.styple.display = "none"
}
//implement new functions here