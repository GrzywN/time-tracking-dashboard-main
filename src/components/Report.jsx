import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { DAILY, WEEKLY, MONTHLY } from "../data/constants";

export default function Report(props) {
  const { timeframe, onTimeframeChange } = props;

  const clickHandler = (event) => {
    const newTimeframe = event.target.textContent.toLowerCase();
    onTimeframeChange(newTimeframe);
  };

  return (
    <div className="relative min-h-[12.6875rem] rounded-2xl bg-DarkBlue sm:col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2 lg:min-h-[32.375rem]">
      <motion.div
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute flex h-[8.3125rem] w-full items-center gap-5 rounded-2xl bg-Blue pl-8 pt-[2.1875rem] pb-[2.125rem] pr-10 lg:h-[22.125rem] lg:flex-col lg:items-start"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-auto w-16 rounded-full border-[3px] border-white lg:w-[4.75rem]"
          src="./src/assets/image-jeremy.png"
          alt="Jeremy Robson"
        />
        <div className="">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mb-1 text-PaleBlue"
          >
            <small>Report for</small>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-White"
          >
            Jeremy Robson
          </motion.h1>
        </div>
      </motion.div>
      <div className="mt-[9.8125rem] lg:mt-[23.75rem]">
        <ul className="flex lg:ml-8 lg:h-[6.625rem] lg:flex-col lg:justify-between">
          <li className="w-full text-center lg:text-left">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              type="button"
              className={`hover-transition hover:text-White ${
                timeframe === DAILY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Daily
            </motion.button>
          </li>
          <li className="w-full text-center lg:text-left">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.25 }}
              type="button"
              className={`hover-transition hover:text-White ${
                timeframe === WEEKLY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Weekly
            </motion.button>
          </li>
          <li className="w-full text-center lg:text-left">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              type="button"
              className={`hover-transition hover:text-White ${
                timeframe === MONTHLY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Monthly
            </motion.button>
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
