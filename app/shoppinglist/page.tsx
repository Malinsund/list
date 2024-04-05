"use client";
import { useState } from "react";

// Denna komponenten bryter mot Single Responsibility Principle (SRP) då jag inkluderar logik både för att lägga till nya object samt för att rendera listan, för att förbättra borde jag ha delat upp denna i 2 olika komponenter!

interface ShoppingItem {
  name: string;
  bought: boolean;
}

function ShoppingList() {
  const [item, setItem] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

  const addItemToList = () => {
    if (item.trim() !== "") {
      setShoppingList([...shoppingList, { name: item, bought: false }]);
      setItem("");
    }
  };

  const toggleBought = (index: number) => {
    const updatedList = [...shoppingList];
    updatedList[index].bought = !updatedList[index].bought;
    setShoppingList(updatedList);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="rounded-lg bg-slate-400" onClick={addItemToList}>
        Lägg till
      </button>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.bought}
              onChange={() => toggleBought(index)}
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
