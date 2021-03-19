import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({feedback, onLeaveFeedback}) => {
    return (
        <button
            className={s.button}
            type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
            {feedback}
        </button>)
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // return options.map((option) => <FeedbackButton feedback={option} onLeaveFeedback={onLeaveFeedback}  />)
    return (<div className={s.feedback}>{options.map((option) => FeedbackButton({ feedback: option, onLeaveFeedback }))}</div>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;