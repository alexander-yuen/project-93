var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

function addUser() {
    p1 = document.getElementById("player1_name_input").value;
    p2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1", p1);
    localStorage.setItem("player2", p2);

    window.location = "game_page.html";
}