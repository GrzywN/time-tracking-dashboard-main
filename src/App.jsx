import { useState } from "react";
import Report from "./components/Report";
import Cards from "./components/Cards";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");

  const timeframeChangeHandler = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-VeryDarkBlue">
      <main className="mx-6 my-20 flex w-screen flex-col gap-6">
        <Report
          timeframe={timeframe}
          onTimeframeChange={timeframeChangeHandler}
        />
        <Cards timeframe={timeframe} />
      </main>
    </div>
  );
}

export default App;
