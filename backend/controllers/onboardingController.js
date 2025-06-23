exports.getSchedule = (req, res) => {
  try {
    const schedule = [
      { week: 1, topic: "Welcome & Orientation", activity: "Live Zoom Call" },
      { week: 2, topic: "Technical Tools Setup", activity: "Video Training" },
      { week: 3, topic: "Cultural Sensitivity", activity: "Quiz + Discussion" },
      { week: 4, topic: "Team Integration", activity: "Virtual Team Building" }
    ];

    res.status(200).json(schedule);
  } catch (err) {
    console.error('Error fetching onboarding schedule:', err.message);
    res.status(500).json({ error: 'Failed to load onboarding schedule' });
  }
};