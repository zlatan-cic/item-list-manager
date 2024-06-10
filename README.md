# Item List App

This is a simple React application for managing a list of items. You can add items with a specified name and quantity, view the list of items, and delete items from the list. The application also displays a message when there are no items in the list.

## Features

- Add items to the list with a name and quantity
- Display the list of items
- Delete items from the list
- Display a message when the list is empty
- Basic validation for item input

## Technologies Used

- React
- Vite
- useState and useEffect hooks
- PropTypes for prop validation

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/item-list-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd item-list-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

Running the Application

1.  Start the development server:

```bash
   npm run dev
```

2. Open your browser and navigate to the URL provided by Vite (usually http://localhost:3000) to see the application.

Usage

- Enter the name of the item in the input field.
- Enter the quantity of the item.
- Click the "Submit" button to add the item to the list.
- Click the "Remove" button next to an item to remove it from the list.
- If there are no items in the list, a message "No items" will be displayed.

## Code Snippets

#### App Component

``` javascript
import { useEffect, useState } from "react";
import ITEMS_DATA from "./data.json";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setItems(ITEMS_DATA.items);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "" || quantity <= 0) {
      alert("Please enter a valid name and quantity.");
      return;
    }
    const newItem = {
      id: Date.now(),
      name: name,
      quantity: parseInt(quantity),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity(1);
  }

  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }

  return (
    <div className="component">
      <div className="wrapper">
        <h1 className="title">Item List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
          <div className="btn-container">
            <button className="btn">Submit</button>
          </div>
        </form>
        <div className="list-items">
          {items.length === 0 ? "No items" : <ItemList items={items} onDelete={handleDelete} />}
        </div>
      </div>
    </div>
  );
}

export default App;
```
#### ItemList Component
``` javascript
import PropTypes from 'prop-types';

export default function ItemList({ items, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

```


