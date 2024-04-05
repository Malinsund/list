"use client";
import { useState } from "react";

// Denna komponenten bryter mot Single Responsibility Principle (SRP) då jag inkluderar logik både för att lägga till nya object samt för att rendera listan, för att förbättra borde jag ha delat upp denna i 2 olika komponenter!

interface ShoppingItem {
  name: string; bought: boolean;
}

function ShoppingList() {
  const [thingOnList, setItem] = useState<string>(""); // i denna kodraden kunde jag istället för att döpa saken på listan till "thingOnList" valt att använda mig av t.ex "item" som både är kortare och mer igenkänt när vi skriver kod
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

  const addItemToList = () => { if (thingOnList.trim() !== "") { setShoppingList([...shoppingList, { name: thingOnList, bought: false }]); setItem("");}
  };
  // Här ovan hr jag gkort ett exempel på hur man inte borde göra, hela kodstycket är skrivet på en rad, detta gör koden svårläst och svår att förstå då detta inte är kutym för hur man borde skriva koden, det är bättre att göra som här nedanför.

  const toggleBought = (index: number) => {
    const updatedList = [...shoppingList];
    updatedList[index].bought = !updatedList[index].bought;
    setShoppingList(updatedList);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={thingOnList}
        onChange={(e) => setItem(e.target.value)}
      />
      <div>
      <button className="rounded-lg bg-slate-400" onClick={addItemToList}>
        Lägg till
      </button>
      </div> {/* här ligger det divar runt varje element vilket i denna lilla kod är väldigt onödigt då det inte gör någon skillnad på stylingen eller koden utan blir bara onödigt många boxar */}
      <div>
        <ul>
          {shoppingList.map((thingOnList, index) => (
              <li key={index}>


              <input
                type="checkbox"
                checked={thingOnList.bought}
                onChange={() => toggleBought(index)}/* konstiga indragningar och onödiga mellanrum som gör koden ytterligare svårläst *//>


          <span>{thingOnList.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
