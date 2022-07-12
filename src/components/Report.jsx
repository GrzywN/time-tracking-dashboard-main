import PropTypes from "prop-types";
import { DAILY, WEEKLY, MONTHLY } from "../data/constants";

export default function Report(props) {
  const { timeframe, onTimeframeChange } = props;

  const clickHandler = (event) => {
    const newTimeframe = event.target.textContent.toLowerCase();
    onTimeframeChange(newTimeframe);
  };

  return (
    <div className="relative min-h-[12.6875rem] rounded-2xl bg-DarkBlue sm:col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2 lg:min-h-[32.375rem]">
      <div className="absolute flex h-[8.3125rem] w-full items-center gap-5 rounded-2xl bg-Blue pl-8 pt-[2.1875rem] pb-[2.125rem] pr-10 lg:h-[22.125rem] lg:flex-col lg:items-start">
        <img
          className="h-auto w-16 rounded-full border-[3px] border-white lg:w-[4.75rem]"
          src="./src/images/image-jeremy.png"
          alt="Jeremy Robson"
        />
        <div className="">
          <p className="mb-1 text-PaleBlue">
            <small>Report for</small>
          </p>
          <h1 className="text-White">Jeremy Robson</h1>
        </div>
      </div>
      <div className="mt-[9.8125rem] lg:mt-[23.75rem]">
        <ul className="flex lg:ml-8 lg:h-[6.625rem] lg:flex-col lg:justify-between">
          <li className="w-full text-center lg:text-left">
            <button
              type="button"
              className={`hover-transition hover:text-White ${
                timeframe === DAILY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Daily
            </button>
          </li>
          <li className="w-full text-center lg:text-left">
            <button
              type="button"
              className={`hover-transition hover:text-White ${
                timeframe === WEEKLY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Weekly
            </button>
          </li>
          <li className="w-full text-center lg:text-left">
            <button
              type="button"
              className={`hover-transition hover:text-White ${
                timeframe === MONTHLY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

Report.propTypes = {
  timeframe: PropTypes.string.isRequired,
  onTimeframeChange: PropTypes.func.isRequired,
};
