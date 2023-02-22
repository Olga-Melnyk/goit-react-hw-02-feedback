import PropTypes from 'prop-types';
import { OptionsTitle, OptionsList, OptionsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <OptionsTitle>Statistics</OptionsTitle>
      <OptionsList>
        <OptionsItem>Good: {good}</OptionsItem>
        <OptionsItem>Neutral: {neutral}</OptionsItem>
        <OptionsItem>Bad: {bad}</OptionsItem>
        <OptionsItem>Total: {total}</OptionsItem>
        <OptionsItem>Positive feedback: {positivePercentage}%</OptionsItem>
      </OptionsList>
    </div>
  );
};

Statistics.propTypes = {
  goodFeedback: PropTypes.number,
  neutralFeedback: PropTypes.number,
  badFeedback: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
