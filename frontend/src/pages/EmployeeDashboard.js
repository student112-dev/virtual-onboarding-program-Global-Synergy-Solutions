import React, { useEffect, useState } from 'react';
import api from '../api';

const EmployeeDashboard = () => {
  const [schedule, setSchedule] = useState([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState('');
  const [completedWeeks, setCompletedWeeks] = useState([]);

  useEffect(() => {
    // Fetch onboarding schedule
    api.get('/onboarding/schedule', {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => setSchedule(res.data));

    // Fetch progress to show completed weeks
    api.get('/admin/progress', {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => {
      const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id;
      const userProgress = res.data
        .filter(p => p.userId._id === userId)
        .map(p => p.week);
      setCompletedWeeks(userProgress);
    });
  }, []);

  const markWeekCompleted = async (week) => {
    try {
      await api.post('/admin/progress', {
        week,
        completed: true
      }, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setCompletedWeeks([...completedWeeks, week]);
      alert(`Week ${week} marked as completed`);
    } catch (err) {
      alert('Error updating progress');
    }
  };

  const submitFeedback = async () => {
    try {
      await api.post('/admin/feedbacks', {
        feedbackText,
        rating: parseInt(rating)
      }, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      alert('Feedback submitted successfully!');
      setFeedbackText('');
      setRating('');
    } catch (err) {
      alert('Error submitting feedback.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Your Onboarding Schedule</h3>
      {schedule.map((item, idx) => (
        <div key={idx} className="card my-2">
          <div className="card-body">
            <h5>Week {item.week}: {item.topic}</h5>
            <p>{item.activity}</p>
            <button
              className="btn btn-outline-success btn-sm me-2"
              onClick={() => markWeekCompleted(item.week)}
              disabled={completedWeeks.includes(item.week)}
            >
              {completedWeeks.includes(item.week) ? '✅ Completed' : 'Mark as Completed'}
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-5">Submit Feedback</h4>
      <textarea
        className="form-control mb-2"
        placeholder="Write your thoughts..."
        value={feedbackText}
        onChange={e => setFeedbackText(e.target.value)}
      />
      <input
        className="form-control mb-2"
        type="number"
        placeholder="Rating (1 to 5)"
        value={rating}
        onChange={e => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <button className="btn btn-primary" onClick={submitFeedback}>Submit</button>
    </div>
  );
};

export default EmployeeDashboard;
