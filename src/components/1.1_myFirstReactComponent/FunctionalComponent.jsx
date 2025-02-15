import PropTypes from 'prop-types';

export const FunctionalComponent = ( {world} ) => {
  return (
    <div className='text-center py-8'>
      <h1 className='text-5xl'>Hellow, {world}</h1>
      <p>
        This React component is made by a function declaration, we call it a
        function component 🥸
      </p>
    </div>
  );
};

FunctionalComponent.propTypes = {
  world: PropTypes.string
}