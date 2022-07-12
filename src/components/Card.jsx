import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { removeWhiteSpaces } from "../utils/nameFormater";
import {
  createOpacityVariants,
  scaleFromBottom,
  cardHover,
} from "../utils/animationVariants";

export default function Card(props) {
  const { title } = props;
  const { current } = props;
  const { previous } = props;

  const styleName = removeWhiteSpaces(title);

  const opacityVariants = createOpacityVariants(3);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      className={`${`bg-${styleName}`} relative min-h-[10rem] rounded-2xl bg-no-repeat sm:min-h-[15.25rem]`}
    >
      <motion.div
        variants={{ ...scaleFromBottom, ...cardHover }}
        className="absolute bottom-0 h-[7.625rem] w-full rounded-2xl bg-DarkBlue px-6 py-7 sm:h-[12.4375rem]"
      >
        <div className="flex w-full items-center justify-between">
          <motion.p variants={opacityVariants[0]} className="text-White">
            {title}
          </motion.p>
          <motion.img
            variants={opacityVariants[0]}
            className="h-[0.3125rem] w-[1.3125rem]"
            src="./src/assets/icon-ellipsis.svg"
            alt=""
            width="21"
            height="5"
          />
        </div>
        <div className="flex w-full items-center justify-between sm:grid">
          <motion.h2 variants={opacityVariants[1]} className="text-White">
            {current}hrs
          </motion.h2>
          <motion.p variants={opacityVariants[2]} className="text-PaleBlue">
            <small>Last week - {previous}hrs</small>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
};

// It has to be here, so Tailwind won't remove these classes while parsing.
// "bg-Work bg-Play bg-Study bg-Exercise bg-Social bg-SelfCare"
