function home_add1(){
    document.getElementById("home_score").textContent++;
}

function home_add2(){
    document.getElementById("home_score").textContent++;
    document.getElementById("home_score").textContent++;
}

function home_add3(){
    document.getElementById("home_score").textContent++;
    document.getElementById("home_score").textContent++;
    document.getElementById("home_score").textContent++;
}

function guest_add1(){
    document.getElementById("guest_score").textContent++;
}

function guest_add2(){
    document.getElementById("guest_score").textContent++;
    document.getElementById("guest_score").textContent++;
}

function guest_add3(){
    document.getElementById("guest_score").textContent++;
    document.getElementById("guest_score").textContent++;
    document.getElementById("guest_score").textContent++;
}

function reset(){
    document.getElementById("guest_score").textContent = 0;
    document.getElementById("home_score").textContent = 0;
}