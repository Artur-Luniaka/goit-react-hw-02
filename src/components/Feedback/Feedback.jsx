import s from "./Feedback.module.css";
const Feedback = ({ amount, total, totalPositive = 0 }) => {
  return (
    <ul className={s.list}>
      <li className={s.green}>Good: {amount.good}</li>
      <li className={s.yellow}>Neutral: {amount.neutral}</li>
      <li className={s.red}>Bad: {amount.bad}</li>
      <li className={s.accent}>Total: {total}</li>
      <li className={s.green_accent}>Positive: {totalPositive}%</li>
    </ul>
  );
};

export default Feedback;
