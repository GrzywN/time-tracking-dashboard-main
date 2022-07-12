import PropTypes from "prop-types";
import Card from "./Card";
import reportData from "../data/data.json";

export default function Cards(props) {
  const { timeframe } = props;

  let id = 0;
  const CardComponents = reportData.map((e) => {
    id += 1;
    const { current } = e.timeframes[timeframe];
    const { previous } = e.timeframes[timeframe];
    return (
      <Card key={id} title={e.title} current={current} previous={previous} />
    );
  });

  return CardComponents;
}

Cards.propTypes = {
  timeframe: PropTypes.string.isRequired,
};
