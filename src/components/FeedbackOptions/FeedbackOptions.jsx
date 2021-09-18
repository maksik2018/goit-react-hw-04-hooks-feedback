import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../FeedbackOptions/FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  // const buttonOptions = Object.keys(options);
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          data-action={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;