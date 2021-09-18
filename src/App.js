import { React, useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import "./App.css";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // }

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const total = good + neutral + bad;
  //   return total;
  // };

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = useState;
    const total = good + neutral + bad;
    return total;
  };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   return Math.round((good / total) * 100);
  // };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = good;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  // onFeedback = (event) => {
  //   const type = event.currentTarget.dataset.action;
  //   this.setState((prevState) => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };

  const onFeedback = (event) => {
    const name = event.currentTarget.dataset.action;
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  // render() {
  // const { good, neutral, bad } = useState;
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={onFeedback}
      />

      <div>
        <h2 className="Statistics">Statistics</h2>
        {good > 0 || neutral || 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </Section>
  );
}
// }

export default App;
