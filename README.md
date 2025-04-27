# Cypress Project for Shopping Site Automation 🛒

This project automates the shopping workflow on [Nike Japan](https://www.nike.com/jp/en/) using **Cypress** with **JavaScript** and the **Page Object Model (POM)** structure.

---

## 📌 Features Covered

- Open Nike homepage
- Search for a product (e.g., "Shoes")
- Select the first product from search results
- Choose size `JP 28.5` (or throw an error if not available)
- Add the product to the cart
- Verify the cart contents or show a message if empty

---

## 🧰 Tech Stack

- [Cypress](https://www.cypress.io/)
- Node.js – JavaScript Runtime Environment
- npm – Node Package Manager
- JavaScript
- Page Object Model (POM) design pattern
- Git & GitHub

---

## 🗂️ Project Structure
CypressProjectForShoppingTest/
│
├── cypress/
│   ├── e2e/
│   │   └── shoppingFlow.cy.js
│   ├── support/
│   │   └── pages/
│   │       ├── HomePage.js
│   │       ├── SearchResultsPage.js
│   │       └── ProductPage.js
│   ├── screenshots/
│   └── videos/
│
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md

![Screenshot 2025-04-25 204406](https://github.com/user-attachments/assets/cab92bc0-c11a-4cfd-9a53-c7e7c29f8d7a)
