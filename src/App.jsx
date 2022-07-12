import Report from "./components/Report";
import Cards from "./components/Cards";

function App() {
  return (
    <div className=" bg-VeryDarkBlue min-h-screen flex justify-center align-center">
      <main className="mx-6 my-20 w-screen flex flex-col gap-6">
        <Report />
        <Cards />
      </main>
    </div>
  );
}

export default App;
