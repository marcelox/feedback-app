import { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedBackData from './data/FeedbackData';
import Card from './components/shared/Card';

function App() {

  const [feedback, setFeedback] = useState(FeedBackData);

  // will be handled by FeedbackItem with onClick
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  const loading = false;

  if (loading) return <h1>Loading</h1>

  return (
    <>
      <Header bgColor="#f93" />
      <Card reverse><h2>Feedback list</h2></Card>
      <FeedbackList 
        feedback={feedback} 
        handleDelete={deleteFeedback} 
      />
    </>
  )
}

export default App