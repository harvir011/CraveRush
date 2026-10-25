# CraveRush — JavaScript Evaluation Build

## Run the website

1. Extract the ZIP file.
2. Open the `craverushresponsive` folder in VS Code.
3. Open `index.html` with Live Server (recommended), then navigate through the website using its navigation menu.
4. Test cart, checkout, order tracking, reviews, order history, search, filters, and dark mode.

## JavaScript improvements in this build

- Added a Promise-based catalog-loading step before the page renders its main content.
- Added Promise-based demo order confirmation with `resolve()` and `reject()`.
- The checkout uses `.then()`, `.catch()`, and `.finally()` to handle success, failure, and cleanup.
- The Place Order button is disabled while the demo order is processing, preventing accidental duplicate submissions.
- Wallet funds are deducted only after the demo order has been confirmed.
- Cart changes are persisted to `localStorage` consistently.
- Added a safe JSON storage reader so malformed saved JSON does not immediately break app startup.
- Added clear error handling if the catalog or order confirmation fails.

## Important project scope

This is still a front-end demonstration. The catalog and order-confirmation delay are simulated in JavaScript. There is no backend/database or real payment processing in this evaluation build. User data and order history are stored in the browser's `localStorage` and are not secure account storage.
