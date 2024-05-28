import PropTypes from "prop-types";

function FunctionComponent( {earth} ) {
  return (
    <div className="text-center py-8">
      <h1 className="text-5xl">Hellow, {earth}</h1>
      <p>This React component is made by a function declaration, we call it a function component 🥸</p>
    </div>
  );
}

export default FunctionComponent;

FunctionComponent.propTypes = {
  earth: PropTypes.string
}