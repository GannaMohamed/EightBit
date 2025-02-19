import React from "react";
import "./StatusBadges.css";

export default function StatusBadge({ status }) {
  const getStatusColors = (status) => {
    switch (status?.toLowerCase()) {
      case "not started":
        return {
          bg: "var(--notStartedLightColor)",
          text: "var(--notStartedColor)",
        };
      case "completed":
        return {
          bg: "var(--completedLightColor)",
          text: "var(--completedColor)",
        };
      case "in progress":
        return {
          bg: "var(--inProgressLightColor)",
          text: "var(--inProgressColor)",
        };
      default:
        return { bg: "var(--oxfordBlueLight)", text: "var(--oxfordBlue)" };
    }
  };

  const { bg, text } = getStatusColors(status);

  return (
    <div
      className="StatusBadge centered"
      style={{ color: text, backgroundColor: bg }}
    >
      <span>{status}</span>
    </div>
  );
}
