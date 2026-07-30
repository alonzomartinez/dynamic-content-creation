# Dynamic Shopping Cart Application

A responsive, vanilla JavaScript shopping cart application designed to practice and demonstrate advanced DOM manipulation.

## Features

- **Dynamic Product Addition:** Add custom products with unique names and prices via user inputs.
- **Quantity Tracking & Optimization:** Increment quantities seamlessly; items with matching names bundle together to avoid duplicate item rows.
- **Real-Time Subtotals & Totals:** Every change to item quantities re-calculates subtotals and updates the total balance.
- **Input Validation:** Edge cases (empty spaces, negative values, missing figures) are intercepted gracefully with an alert message.

## 📂 Project Structure

```text
dynamic-shopping-cart/
│
├── index.html   # Semantic structure
├── styles.css   # Clean flexbox layout configuration
└── script.js    # Data state logic and performance-optimized DOM
```
## Project details

The project has been built to showcase:

### 1. Adding Products
- **Action:** Enter an item name and numerical cost value, then press **Add Product**.
- **Expected Result:** The item renders inside the cart area showing its standard name, unit price, quantity multiplier, and calculated subtotal.

### 2. Removing Products
- **Action:** Click the red **Remove** button alongside any listed product row.
- **Expected Result:** The row vanishes instantly, and the total subtracts the exact value of the removed item.

### 3. Edge-Case Validation
- **Action:** Attempt submitting blank product rows, text strings inside price fields, or zero/negative prices.
- **Expected Result:** The input submission stops immediately, a validation alert dialog box displays, and no corrupted data alters the cart list.

### 4. Quantity Adjustments (App Enhancement Feature)
- **Action:** Use the inline step selectors to raise or lower the quantity input of an active cart item.
- **Expected Result:** The item subtotal phrase updates dynamically, and the final checkout price recalculates down to the penny.

## 🎓 Core Learning Objectives Demonstrated
- **DOM Manipulation:** Creation, attribute configuration, and placement of nodes using `document.createElement`.
- **Event Delegation & Binding:** Attaching tracking loops (`click`, `change`) to interactive items.