import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';
import Notification from '../Notification/Notification'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return ( <>
    { total !== 0 &&
      (<ul className={s.statistics}>
        <li className={s.list}>Good: {good}</li>
        <li className={s.list}>Neutral: {neutral}</li>
        <li className={s.list}>Bad: {bad}</li>
        <li className={s.list}>Total: {total}</li>
        <li className={s.list}>Positive feedback: {positivePercentage}%</li>
      </ul>)}
    {total === 0 && <Notification message="No feedback given"/>}
    </>   
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;