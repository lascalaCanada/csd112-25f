/*
  #8 #8 #8 #8 #8 #8 #8 #8 #8

  Lab #8 — PART 3: Food Pictures Gallery Tab
  DOM‑only implementation with dynamic image grid

  #8 #8 #8 #8 #8 #8 #8 #8 #8
*/

// 1. Select the nav-bar
const navBar = document.getElementById("nav-bar");


// 2. Create nav-bar item for Food Pictures
const galleryLink = document.createElement("a");
galleryLink.textContent = "Food Pictures";      // visible text
galleryLink.href = "#";                         // placeholder link
galleryLink.id = "nav-gallery";                 // consistent naming
navBar.appendChild(galleryLink);


// 3. Create tab container for Food Pictures
const galleryTab = document.createElement("div");
galleryTab.id = "tab-gallery";                  // unique ID for tab
galleryTab.classList.add("tab-content");        // shared tab class


// 4. Create parent grid container
const galleryGrid = document.createElement("div");
galleryGrid.classList.add("gallery-grid");      // class for CSS grid
galleryTab.appendChild(galleryGrid);


// 5. Array of food images (src + alt)
const foodImages = [
  { src: "images/food1.jpg", alt: "Delicious Pasta" },
  { src: "images/food2.jpg", alt: "Fresh Salad" },
  { src: "images/food3.jpg", alt: "Tasty Burger" },
  { src: "images/food4.jpg", alt: "Sweet Dessert" }
];


// 6. Loop through array and create <img> tags
for (let i = 0; i < foodImages.length; i++) {
  const img = document.createElement("img");
  img.src = foodImages[i].src;
  img.alt = foodImages[i].alt;
  img.classList.add("gallery-item");            // consistent class
  galleryGrid.appendChild(img);
}


// 7. Append tab to main content area
const mainContent = document.getElementById("main-content");
mainContent.appendChild(galleryTab);


// 8. Toggle visibility when nav item clicked
galleryLink.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";                 // hide other tabs
  });
  galleryTab.style.display = "block";       // show gallery
});

