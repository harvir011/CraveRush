# 🍔 CraveRush — JavaScript Evaluation Build

A modern, responsive food ordering website built with **HTML, CSS, and JavaScript**, featuring interactive restaurant browsing, cart management, checkout, order tracking, reviews, and order history.

This evaluation build demonstrates practical JavaScript concepts, especially **Promises, asynchronous operations, error handling, and browser storage**.

🌐 **Live Demo:** [CraveRush](https://crave-rush.vercel.app)

---

## ✨ Features

### 🍽️ Food Browsing
- Browse food items and restaurants through a responsive interface.
- Search the catalog and filter available items.
- Navigate between dedicated pages for menus, restaurants, and other features.

### 🛒 Cart Management
- Add and manage items in the shopping cart.
- Persist cart changes using browser `localStorage`.
- Maintain cart data across page reloads.

### 💳 Checkout & Order Confirmation
- Promise-based demo order confirmation using `resolve()` and `reject()`.
- Handle successful and failed checkout operations.
- Disable the Place Order button while an order is processing.
- Deduct demo wallet funds only after order confirmation.
- Use `.then()`, `.catch()`, and `.finally()` to manage the checkout lifecycle.

### 📦 Orders & Order Tracking
- View order history stored in the browser.
- Explore the order-tracking interface.
- Test the simulated ordering workflow without a backend.

### ⭐ Reviews & User Interface
- Browse and interact with the reviews interface.
- Responsive navigation and mobile-friendly layouts.
- Dark mode support for a more comfortable browsing experience.

### ⚡ JavaScript Improvements
- Promise-based catalog loading before the main content renders.
- Simulated asynchronous order confirmation.
- Error handling for catalog-loading and order-confirmation failures.
- Safe JSON storage reading to handle malformed saved data.
- Consistent cart persistence through `localStorage`.
- Checkout cleanup and button-state management.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, layouts, and responsive design |
| JavaScript (ES6+) | Application logic and interactivity |
| JavaScript Promises | Asynchronous catalog loading and order confirmation |
| `localStorage` | Browser-based cart, wallet, and order data persistence |
| VS Code Live Server | Local development and testing |
| Vercel | Website deployment |

---

## 📂 Project Structure

```text
craverushresponsive/
├── assets/          # Project images and other assets, if included
├── index.html       # Main landing page
├── about.html       # About page
├── menu.html        # Food menu
├── restaurants.html # Restaurant listings
├── checkout.html    # Checkout and order confirmation
├── orders.html      # Order history and tracking
├── reviews.html     # Reviews page
├── style.css        # Shared styles and responsive design
├── app.js           # JavaScript application logic
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- The [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- A modern web browser

### Installation and Setup

**1. Download the project**

Download or clone this repository, or extract the provided project ZIP.

**2. Open the project**

Open the `craverushresponsive` folder in VS Code.

**3. Launch the website**

Open `index.html` and select **Open with Live Server**.

**4. Explore the application**

Use the navigation menu to browse the website and test its interactive features.

---

## 🧪 Testing Checklist

Use this checklist to verify the evaluation build.

- [ ] Catalog loads before the main content renders.
- [ ] Search and filters work as expected.
- [ ] Items can be added to and managed in the cart.
- [ ] Cart data persists after refreshing the page.
- [ ] Checkout handles successful order confirmation.
- [ ] Checkout handles simulated order-confirmation failures.
- [ ] The Place Order button remains disabled during processing.
- [ ] Wallet funds are deducted only after successful confirmation.
- [ ] Order history and tracking interfaces work as expected.
- [ ] Reviews and dark mode are functional.
- [ ] The layout works on desktop and mobile screens.

---

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates practical use of modern JavaScript concepts:

- **Promises:** Represent the results of asynchronous operations.
- **`resolve()` and `reject()`:** Simulate successful and failed order confirmation.
- **`.then()`:** Process successful asynchronous results.
- **`.catch()`:** Handle errors and rejected Promises.
- **`.finally()`:** Perform cleanup after checkout completes, whether it succeeds or fails.
- **Asynchronous catalog loading:** Delay the main rendering workflow until catalog loading completes.
- **Defensive programming:** Handle malformed JSON and expected operation failures.
- **State persistence:** Store and retrieve application data through `localStorage`.
- **Duplicate-submission prevention:** Disable the checkout button while processing an order.

---

## ⚠️ Project Scope & Limitations

CraveRush is a **front-end demonstration project** designed for learning and JavaScript evaluation.

- Catalog loading and order confirmation are simulated in JavaScript.
- There is no backend server or database.
- Payments are not processed through a real payment gateway.
- Wallet balances are demo values, not real financial accounts.
- Cart data and order history are stored in browser `localStorage`.
- Browser storage is not secure account storage and does not synchronize across devices.
- Authentication and order tracking are not backed by a real server.

**Important:** This project should not be used to process real customer orders, payments, or sensitive personal information.

---

## 🔮 Future Enhancements

- Integrate a backend API and database.
- Add secure user authentication.
- Connect a real payment gateway in a properly secured environment.
- Implement server-side order management and tracking.
- Add persistent user accounts and synchronized order history.
- Improve automated testing and checkout reliability.

---

## 👨‍💻 Project Overview

**CraveRush** combines responsive web design with interactive JavaScript functionality to demonstrate a food ordering workflow. Its evaluation build emphasizes asynchronous programming, Promise handling, error management, and reliable browser-side state persistence.

Built with ❤️ using HTML, CSS, and JavaScript.

---

⭐ If you find this project interesting, consider giving the repository a star!
