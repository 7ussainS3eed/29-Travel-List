import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import Swal from "sweetalert2";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((lastItems) => [...lastItems, item]);
  }
  function handleDeleteItems(itemId) {
    setItems((lastItems) => lastItems.filter((item) => item.id !== itemId));
  }
  function handleCheck(itemId) {
    setItems((lastItems) =>
      lastItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete all items!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete all!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
        Swal.fire("Deleted!", "All items have been removed.", "success");
      }
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheck={handleCheck}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
