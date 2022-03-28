import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p className={css.statistic}>Good: {good}</p>
      <p className={css.statistic}>Neutral: {neutral}</p>
      <p className={css.statistic}>Bad: {bad}</p>
      <p className={css.statistic}>Total: {total}</p>
      <p className={css.statistic}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
