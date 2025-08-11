# 🎯 Aplicación de Selección de Amigo Secreto

Este proyecto es una pequeña aplicación en JavaScript que permite al usuario:

- Agregar nombres a una lista de amigos.
- Visualizar la lista completa.
- Seleccionar un "amigo secreto" de forma aleatoria.

Es ideal como ejemplo educativo para aprender manipulación del DOM y gestión de arrays en JavaScript.

---

## 📂 Estructura del Proyecto

El código JavaScript interactúa directamente con elementos HTML que deben tener los siguientes **IDs**:

- `#friend` → Campo de entrada para escribir el nombre del amigo.
- `#listaAmigos` → Lista (`<ul>` o `<ol>`) donde se mostrarán los amigos agregados.
- `#resultado` → Contenedor (`<div>` o similar) donde se mostrará el nombre del amigo secreto.

---

## ⚙️ Funcionalidades

### 1. `addFriend()`
- Obtiene el valor del campo de entrada `#friend`.
- Verifica que no esté vacío.
- Agrega el nombre a la lista `friendsList`.
- Llama a `showFriends()` para actualizar la vista.
- Limpia el campo de entrada llamando a `clear()`.

### 2. `clear()`
- Restablece el campo de entrada a vacío.

### 3. `showFriends()`
- Limpia la lista HTML.
- Recorre el arreglo `friendsList` y agrega cada nombre como elemento `<li>`.

### 4. `secretFriend()`
- Genera un índice aleatorio para seleccionar un amigo.
- Muestra el nombre en el contenedor `#resultado`.
- Si no hay amigos en la lista, muestra un mensaje de alerta.
