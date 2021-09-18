import React from "react";
import PropTypes from "prop-types";
import { Text } from "../Statistics/Statistic.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}% </Text>
    </>
    
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

};

export default Statistics;