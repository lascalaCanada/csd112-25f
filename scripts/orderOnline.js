/*
  #8 #8 #8 #8 #8 #8 #8 #8 #8

  Lab #8 — PART 2: Order Online Tab
  DOM‑only implementation with Formspree POST form

  #8 #8 #8 #8 #8 #8 #8 #8 #8
*/

// 1. Select the nav-bar
const navBar = document.getElementById("nav-bar");


// 2. Create nav-bar item for Order Online
const orderLink = document.createElement("a");
orderLink.textContent = "Order Online";             // visible text
orderLink.href = "#";                               // placeholder link
orderLink.id = "nav-order";                         // consistent naming
navBar.appendChild(orderLink);


// 3. Create tab container for Order Online
const orderTab = document.createElement("div");
orderTab.id = "tab-order";                          // unique ID for tab
orderTab.classList.add("tab-content");              // shared tab class


// 4. Create form element
const form = document.createElement("form");
form.action = "https://formspree.io/f/yourFormID";  // replace with your Formspree endpoint
form.method = "POST";                               // uppercase POST


// 5. Name field (label + input)
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
nameLabel.setAttribute("for", "order-name");

const nameInput = document.createElement("input");
nameInput.type = "text";                            // validation type
nameInput.id = "order-name";
nameInput.name = "name";
nameInput.required = true;

// Append name field
form.appendChild(nameLabel);
form.appendChild(nameInput);


// 6. Email field (label + input)
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
emailLabel.setAttribute("for", "order-email");

const emailInput = document.createElement("input");
emailInput.type = "email";                          // validation type
emailInput.id = "order-email";
emailInput.name = "email";
emailInput.required = true;

// Append email field
form.appendChild(emailLabel);
form.appendChild(emailInput);


// 7. Order field (label + textarea)
const orderLabel = document.createElement("label");
orderLabel.textContent = "Order:";
orderLabel.setAttribute("for", "order-text");

const orderTextarea = document.createElement("textarea");
orderTextarea.id = "order-text";
orderTextarea.name = "order";
orderTextarea.required = true;

// Append order field
form.appendChild(orderLabel);
form.appendChild(orderTextarea);


// 8. Submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit Order";

form.appendChild(submitButton);


// 9. Append form to tab
orderTab.appendChild(form);


// 10. Append tab to main content area
const mainContent = document.getElementById("main-content");
mainContent.appendChild(orderTab);


// 11. Toggle visibility when nav item clicked
orderLink.addEventListener("click", () => {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";                     // hide other tabs
  });
  orderTab.style.display = "block";                 // show order form
});
