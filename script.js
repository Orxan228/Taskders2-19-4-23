const iD = document.getElementById("id")
const userName = document.getElementById("name")
const surname = document.getElementById("surname")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const tBody = document.getElementById("tBody")
const subBtn = document.getElementById("subBtn")
let arr = []

subBtn.addEventListener("click", function (e) {
    e.preventDefault()
    tBodyInner =`              
    <tr>
    <th scope="row">${iD.value}</th>
    <td>${userName.value}</td>
    <td>${surname.value}</td>
    <td>${phone.value}</td>
    <td>${email.value}</td>
    </tr>`
    console.log(tBodyInner);
    tBody.innerHTML += tBodyInner
})