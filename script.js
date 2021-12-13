let items = ["A Car", "Decorations", "Some Clothes"];
const checklist = document.getElementById("lists");
const addList = document.getElementById("push");
const newItem = document.querySelector('#checklist input');

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.

function displayItems() {
    checklist.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        checklist.innerHTML += `
        <div class="checklist-item lists">
                <span id="listname">
                <input type="checkbox" id="${i}"> 
                <label for="${i}">${items[i]}</label>
                </span>
                <button class="delete" onclick="deleteItem(${i})">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
    if(checklist.innerHTML === "") {
        checklist.innerHTML = "<p>Your Shopping List is Currently Empty, click the add button to add new list items :)</p>";
    }
}
displayItems();


// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.


/* 
Implemented this goal through CSS already

*/


// Stretch goals:

// - Add an input which allows the user to add more items.
addList.addEventListener('click', () => {
    if (newItem.value === "") {
        alert("Please Enter an Item");
    }
    else {
        items.push(newItem.value);
        newItem.value = "";
        displayItems();
    }
});

// - Add a delete button for the items.
function deleteItem(j) {
    items.splice(j, 1);
    displayItems();
}



