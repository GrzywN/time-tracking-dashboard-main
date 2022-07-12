import PropTypes from "prop-types";

export default function Card(props) {
  const { title } = props;

  return <div>{title}</div>;
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
