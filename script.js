// Initial data
let groceries = [
  { name: "Rice", price: 3000 },
  { name: "Beans", price: 2500 },
  { name: "Oil",  price: 1200 },
  { name: "Fish",  price: 1400 },
  { name: "Maggi",  price: 2200 },

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

//  Add new item
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

//  Total price button
totalBtn.addEventListener("click", calculateTotal);

//  Display initial list when page loads
renderList();


















