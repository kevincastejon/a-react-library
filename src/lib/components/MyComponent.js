import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component example
 */
export default function MyComponent(props) {
  const {
    myProp,
  } = props;
  const styles = {
    root: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
    },
  };
  return (
    <div style={styles.root}>
      <h1>{myProp}</h1>
    </div>
  );
}

MyComponent.propTypes = {
  /** A random prop */
  myProp: PropTypes.string.isRequired,
};
MyComponent.defaultProps = {

};
