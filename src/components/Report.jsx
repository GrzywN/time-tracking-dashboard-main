import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { DAILY, WEEKLY, MONTHLY } from "../data/constants";
import {
  createOpacityVariants,
  scaleFromTop,
} from "../utils/animationVariants";

export default function Report(props) {
  const { timeframe, onTimeframeChange } = props;

  const clickHandler = (event) => {
    const newTimeframe = event.target.textContent.toLowerCase();
    onTimeframeChange(newTimeframe);
  };

  const opacityVariants = createOpacityVariants(6);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative min-h-[12.6875rem] rounded-2xl bg-DarkBlue sm:col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2 lg:min-h-[32.375rem]"
    >
      <motion.div
        variants={scaleFromTop}
        className="absolute flex h-[8.3125rem] w-full items-center gap-5 rounded-2xl bg-Blue pl-8 pt-[2.1875rem] pb-[2.125rem] pr-10 lg:h-[22.125rem] lg:flex-col lg:items-start"
      >
        <motion.img
          variants={opacityVariants[0]}
          className="h-auto w-16 rounded-full border-[3px] border-white lg:w-[4.75rem]"
          src="./src/assets/image-jeremy.png"
          alt="Jeremy Robson"
        />
        <div className="">
          <motion.p
            variants={opacityVariants[1]}
            className="mb-1 text-PaleBlue"
          >
            <small>Report for</small>
          </motion.p>
          <motion.h1 variants={opacityVariants[2]} className="text-White">
            Jeremy Robson
          </motion.h1>
        </div>
      </motion.div>
      <div className="mt-[9.8125rem] lg:mt-[23.75rem]">
        <ul className="flex lg:ml-8 lg:h-[6.625rem] lg:flex-col lg:justify-between">
          <li className="w-full text-center lg:text-left">
            <motion.button
              variants={opacityVariants[2]}
              type="button"
              className={`transition-colors duration-[250] ease-in-out hover:text-white ${
                timeframe === DAILY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Daily
            </motion.button>
          </li>
          <li className="w-full text-center lg:text-left">
            <motion.button
              variants={opacityVariants[3]}
              type="button"
              className={`transition-colors duration-[250] ease-in-out hover:text-white ${
                timeframe === WEEKLY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Weekly
            </motion.button>
          </li>
          <li className="w-full text-center lg:text-left">
            <motion.button
              variants={opacityVariants[4]}
              type="button"
              className={`transition-colors duration-[250] ease-in-out hover:text-white ${
                timeframe === MONTHLY ? "text-White" : "text-DesaturatedBlue"
              }`}
              onClick={clickHandler}
            >
              Monthly
            </motion.button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

Report.propTypes = {
  timeframe: PropTypes.string.isRequired,
  onTimeframeChange: PropTypes.func.isRequired,
};
