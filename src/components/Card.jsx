// It has to be here, so Tailwind won't remove these classes while parsing.
// "bg-Work bg-Play bg-Study bg-Exercise bg-Social bg-SelfCare"

import PropTypes from "prop-types";

export default function Card(props) {
  const { title } = props;
  const { current } = props;
  const { previous } = props;

  const styleName = title.replaceAll(" ", "");

  return (
    <div
      className={`${`bg-${styleName}`} bg-no-repeat h-[10rem] rounded-2xl relative`}
    >
      <div className="bg-DarkBlue w-full h-[7.625rem] rounded-2xl px-6 py-7 absolute bottom-0 hover:bg-DarkBlueHover hover-transition">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-White">{title}</h1>
          <img
            className="w-[1.3125rem] h-[0.3125rem]"
            src="./src/images/icon-ellipsis.svg"
            alt=""
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-White">{current}hrs</h2>
          <p className="text-PaleBlue">
            <small>Last week - {previous}hrs</small>
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
};
