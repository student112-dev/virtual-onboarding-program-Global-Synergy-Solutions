import React, { useEffect, useState } from 'react';
import api from '../api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const headers = { Authorization: localStorage.getItem('token') };
    api.get('/admin/users', { headers }).then(res => setUsers(res.data));
    api.get('/admin/feedbacks', { headers }).then(res => setFeedbacks(res.data));
    api.get('/admin/progress', { headers }).then(res => setProgress(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Admin Dashboard</h3>

      <h5 className="mt-4">Users</h5>
      <ul className="list-group mb-3">
        {users.map(user => (
          <li key={user._id} className="list-group-item">
            {user.name} ({user.email}) - {user.timezone}, {user.language}
          </li>
        ))}
      </ul>
      
      <h5>Feedback</h5>
      {feedbacks.map(f => (
        <div key={f._id} className="alert alert-info">
          <strong>{f.userId.name}</strong>: {f.feedbackText} (Rating: {f.rating})
        </div>
      ))}

      <h5>Progress</h5>
      <ul className="list-group">
        {progress.map(p => (
          <li key={p._id} className="list-group-item">
            {p.userId.name} - Week {p.week}: {p.completed ? '✅ Completed' : '❌ Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
