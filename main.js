function home_add(points){
    let scoreElement = document.getElementById("home_score");
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function guest_add(points){
    let scoreElement = document.getElementById("guest_score");
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function reset(){
    document.getElementById("guest_score").textContent = 0;
    document.getElementById("home_score").textContent = 0;
}