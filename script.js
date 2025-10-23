// Initial data
let groceries = [
  { name: "Rice", price: 3000 },
  { name: "Beans", price: 2500 },
  { name: "Oil", price: 1200 }
  { name: "Fish", price: 2000 }
  { name: "Maggi", price: 1300 }
];

const groceryList = document.getElementById("groceryList");
const addBtn = document.getElementById("addBtn");
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const totalBtn = document.getElementById("totalBtn");
const totalDisplay = document.getElementById("totalDisplay");

// Function to render list
function renderList() {
  groceryList.innerHTML = ""; // clear previous list

  groceries.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₦${item.price}
      <button class="deleteBtn" data-index="${index}">Delete</button>
    `;
    groceryList.appendChild(li);
  });

  // Attach delete event
  const deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      groceries.splice(index, 1); // remove item
      renderList(); // re-render list
    });
  });
}

//  Function to calculate total
function calculateTotal() {
  let total = 0;
  groceries.forEach(item => {
    total += Number(item.price);
  });
  totalDisplay.textContent = `Total Price: ₦${total}`;
}

// ➕ Add new item
addBtn.addEventListener("click", () => {
  const name = itemName.value.trim();
  const price = itemPrice.value.trim();

  if (name === "" || price === "") {
    alert("Please enter both item name and price!");
    return;
  }

  groceries.push({ name, price: Number(price) });
  renderList();
  itemName.value = "";
  itemPrice.value = "";
});

// 🧾 Total price button
totalBtn.addEventListener("click", calculateTotal);

// 🖥️ Display initial list when page loads
renderList();









// const groceries = [
//   { grocery: 'Rice',  price: 1600,},
//   { grocery: 'Beans', price: 2200,},
//   { grocery: 'Sugar', price: 1090,},
//   { grocery: 'Palm Oil', price: 1190,},
//   { grocery: 'Milk',  price: 1290,},
//   { grocery: 'Tomato', price: 3090,},
//   { grocery: 'Egg',   price: 2090,},
//   { grocery: 'Salt', price: 4590,},
//   { grocery: 'potatoe', price: 2090,},
//   { grocery: 'Onions', price: 900,},
//   { grocery: 'Maggi', price: 1090,},
//   { grocery: 'Ponmo', price: 2390,},
//   { grocery: 'Fish', price: 5090,},
  
// ];



// let selected = [];  //to collect all the grocery selected

// const searchInput = document.getElementById("searchForGroceries").value;
// const groceryList = document.getElementById("groceryList");
// const selectedItemDiv = document.getElementById("selectedItem");
// const btn = document.getElementById("btn");

// //To display all students
// groceries.forEach((groceries) => {
//   const li = document.createElement("li");
//   li.textContent = `${groceries.grocery} - grocery: ${groceries.grocery}, price: ${groceries.price}`;
//   searchInput.appendChild(li);
// });


// btn.addEventListener("click", () => {
//   const searchName = searchForGroceries.value.trim().toLowerCase();
//   let found = false;
//   selectedItemDiv.innerHTML = ""; // clear previous result

//   groceries.forEach((groceries) => {
//     if (groceries.grocery.toLowerCase() === searchName) {
//       selectedItemDiv.innerHTML = 
//       `
//         <p><strong>grocery:</strong> ${groceries.grocery}</p>
//         <p><strong>Price:</strong> ${groceries.price}</p>
//       `;
//       found = true;
//     }
//   });

//   if (!found) {
//     selectedItemDiv.innerHTML = "<p style='color:red;'>Student not found!</p>";
//   }
// });








