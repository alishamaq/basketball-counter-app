let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function homeScoreButton1(){
    homeScore += 1;
    homeScoreEl.innerText = homeScore;
}

function homeScoreButton2(){
    homeScore += 2;
    homeScoreEl.innerText = homeScore;
}

function homeScoreButton3(){
    homeScore += 3;
    homeScoreEl.innerText = homeScore;
}

function guestScoreButton1(){
    guestScore += 1;
    guestScoreEl.innerText = guestScore;
}

function guestScoreButton2(){
    guestScore +=2;
    guestScoreEl.innerText = guestScore;
}

function guestScoreButton3(){
    guestScore +=3;
    guestScoreEl.innerText = guestScore;
}
