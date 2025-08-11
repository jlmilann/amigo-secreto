// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function addFriend() {
    let name = document.querySelector('#friend').value;

    if (name.trim().length == 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        friendsList.push(name);
    }
    clear();   
}

function clear(){
    let name = document.querySelector('#friend');
    name.value = ""
}
