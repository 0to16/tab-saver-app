import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://lead-tracker-904fe-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

inputBtn.addEventListener("click", function() {
    console.log(inputEl.value)
    inputEl.value = ""
    render(myLeads)
})



deleteBtn.addEventListener("dblclick", function(){
    render(myLeads)
})

//trying to create a PR