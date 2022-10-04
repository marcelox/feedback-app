import { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedBackData from './data/FeedbackData';
import Card from './components/shared/Card';

function App() {

  const [feedback, setFeedback] = useState(FeedBackData);

  const loading = false;

  if (loading) return <h1>Loading</h1>

  return (
    <>
      <Header bgColor="#f93" />
      <Card reverse={true}><h2>Feedback list</h2></Card>
      <FeedbackList feedback={feedback} />
    </>
  )
}

export default App