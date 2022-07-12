import { useState } from "react";
import Report from "./components/Report";
import Cards from "./components/Cards";
import { DEFAULT_TIMEFRAME } from "./data/constants";

function App() {
  const [timeframe, setTimeframe] = useState(DEFAULT_TIMEFRAME);

  const timeframeChangeHandler = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-VeryDarkBlue">
      <main className="mx-6 my-20 flex w-screen flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:max-w-[69.375rem] lg:grid-cols-4">
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
