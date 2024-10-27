import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (!savedFeedback) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
    return JSON.parse(savedFeedback);
  });
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const totalPositive =
    totalFeedback > feedback.neutral
      ? Math.round((feedback.good / (totalFeedback - feedback.neutral)) * 100)
      : 0;
  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          amount={feedback}
          total={totalFeedback}
          totalPositive={totalPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
