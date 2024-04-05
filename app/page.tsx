import ShoppingList from "./shoppinglist/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-bold mb-3">Min inköpslista</h1>
        <div className="">
          <ShoppingList />
        </div>
      </div>
    </main>
  );
}
