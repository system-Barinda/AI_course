import React from "react";
import "./DataHighlightsDashboard.css";

const data = [
  {
    title: "Students Enrolled",
    value: "1,250",
    icon: "👨‍🎓",
  },
  {
    title: "Courses Available",
    value: "45",
    icon: "📚",
  },
  {
    title: "Completion Rate",
    value: "78%",
    icon: "✅",
  },
  {
    title: "Active Users",
    value: "320",
    icon: "🔥",
  },
];

export default function DataHighlightsDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Data Highlights</h2>
      <div className="dashboard-grid">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}