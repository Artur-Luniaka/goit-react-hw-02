const Feedback = ({ amount }) => {
  return (
    <ul>
      <li>Good:{amount.good}</li>
      <li>Neutral:{amount.neutral}</li>
      <li>Bad:{amount.bad}</li>
    </ul>
  );
};

export default Feedback;
