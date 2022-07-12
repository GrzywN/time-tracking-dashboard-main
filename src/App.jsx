import Report from "./components/Report";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-VeryDarkBlue">
      <main className="mx-6 my-20 flex w-screen flex-col gap-6">
        <Report />
        <Cards />
      </main>
    </div>
  );
}

export default App;
