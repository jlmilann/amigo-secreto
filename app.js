// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function addFriend() {
    let name = document.querySelector('#friend').value;

    if (name.trim().length == 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        friendsList.push(name);
        showFriends();
    }
    clear();
}

function clear() {
    let name = document.querySelector('#friend');
    name.value = ""
}

function showFriends() {
    let list = document.querySelector('#listaAmigos');
    list.innerHTML = "";

    for (let i = 0; i < friendsList.length; i++) {
        let li = document.createElement('li');
        li.textContent = friendsList[i];
        list.appendChild(li);
    }
}

function secretFriend() {
    let index = Math.floor(Math.random() * friendsList.length);
    let friend = document.querySelector('#resultado');

    if (friendsList.length === 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        friend.innerHTML = friendsList[index];
    }
}