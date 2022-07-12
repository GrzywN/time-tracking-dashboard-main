// It has to be here, so Tailwind won't remove these classes while parsing.
// "bg-Work bg-Play bg-Study bg-Exercise bg-Social bg-SelfCare"

import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Card(props) {
  const { title } = props;
  const { current } = props;
  const { previous } = props;

  const styleName = title.replaceAll(" ", "");

  return (
    <div
      className={`${`bg-${styleName}`} relative min-h-[10rem] rounded-2xl bg-no-repeat sm:min-h-[15.25rem]`}
    >
      <motion.div
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="hover-transition absolute bottom-0 h-[7.625rem] w-full rounded-2xl bg-DarkBlue px-6 py-7 hover:bg-DarkBlueHover sm:h-[12.4375rem]"
      >
        <div className="flex w-full items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-White"
          >
            {title}
          </motion.p>
          <img
            className="h-[0.3125rem] w-[1.3125rem]"
            src="./src/assets/icon-ellipsis.svg"
            alt=""
          />
        </div>
        <div className="flex w-full items-center justify-between sm:grid">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="text-White"
          >
            {current}hrs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-PaleBlue"
          >
            <small>Last week - {previous}hrs</small>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
};
