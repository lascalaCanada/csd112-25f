/*
  #8 #8 #8 #8 #8 #8 #8 #8 #8

  Lab #8 — PART 1: Appetizer’s Tab
  DOM‑only implementation with Flexbox layout

  #8 #8 #8 #8 #8 #8 #8 #8 #8
*/

// 1. Select the existing nav item (already in HTML)
const appetizerLink = document.getElementById("nav-appetizers");


// 2. Create tab container for Appetizers
const appetizerTab = document.createElement("div");
appetizerTab.id = "tab-appetizers";                     // unique ID for tab
appetizerTab.classList.add("tab-content");              // shared tab class


// 3. Add appetizer items dynamically
const appetizers = ["Spring Rolls", "Garlic Bread", "Bruschetta"];
appetizers.forEach(item => {
  const dish = document.createElement("div");
  dish.classList.add("appetizer-item");                 // consistent class
  dish.textContent = item;                              // dish name
  appetizerTab.appendChild(dish);
});


// 4. Append tab to main content area
const mainContent = document.getElementById("main-content");
mainContent.appendChild(appetizerTab);


// 5. Toggle visibility when nav item clicked
appetizerLink.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";                         // hide other tabs
  });
  appetizerTab.style.display = "flex";                  // show appetizers
});

