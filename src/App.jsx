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
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="component">
        <div className="wrapper">
          <h1 className="title">Item List</h1>
          {/* AddItemForm */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Item Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div className="btn-container">
              <button className="btn">Submit</button>
            </div>
          </form>
          <div className="list-items">
            {/* Items map() */}
            {items.length === 0 ? (
              "No items"
            ) : (
              <ItemList items={items} onDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
