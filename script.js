

let user_name;
let user_color;
let user_number;
let x;
let y;
let z;


document.getElementById("button").onclick = function () {
    user_name = document.getElementById("text").value;
    user_color = document.getElementById("favourite-color").value;
    user_number = document.getElementById("number").value;

    document.getElementById("result").innerHTML = user_name + " " + "choose" + user_color + " and " + " " + user_number;
}

document.getElementById("numberButton").onclick = function () {

    x = Math.floor(Math.random() * 100) + 1;
    y = Math.floor(Math.random() * 100) + 1;
    z = Math.floor(Math.random() * 100) + 1;

    document.getElementById("firstN").innerHTML = x;
    document.getElementById("secondN").innerHTML = y;
    document.getElementById("ThirdN").innerHTML = z;
}