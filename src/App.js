import { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedBackData from './data/FeedbackData';

function App() {

  const [feedback, setFeedback] = useState(FeedBackData);

  const loading = false;

  if (loading) return <h1>Loading</h1>

  return (
    <>
      <Header bgColor="#f93" />
      <h1>Feedback list</h1>
      <FeedbackList feedback={feedback} />
    </>
  )
}

export default App