import PropTypes from "prop-types";
import Card from "./Card";
import reportData from "../data/data.json";

export default function Cards(props) {
  const { timeframe } = props;

  const CardComponents = reportData.map((e) => {
    const { current } = e.timeframes[timeframe];
    const { previous } = e.timeframes[timeframe];
    const { title } = e;
    return (
      <Card key={title} title={title} current={current} previous={previous} />
    );
  });

  return CardComponents;
}

Cards.propTypes = {
  timeframe: PropTypes.string.isRequired,
};
