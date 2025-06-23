exports.getSchedule = (req, res) => {
  const schedule = [
    { week: 1, topic: "Welcome & Orientation", activity: "Live Zoom Call" },
    { week: 2, topic: "Technical Tools Setup", activity: "Video Training" },
    { week: 3, topic: "Cultural Sensitivity", activity: "Quiz + Discussion" },
    { week: 4, topic: "Team Integration", activity: "Virtual Team Building" }
  ];
  res.json(schedule);
};
