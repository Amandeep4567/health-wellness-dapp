// src/components/fitness/ActivityLog.tsx

import React from "react";
import { useFitnessData } from "../../hooks/useFitnessData";
import { Activity } from "../../types/fitness";

interface ActivityLogProps {}

const ActivityLog: React.FC<ActivityLogProps> = () => {
  const { activityData } = useFitnessData();

  // Sort activities by date (most recent first)
  const sortedActivities = [...activityData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <h2>Recent Activities</h2>
      {sortedActivities.length === 0 ? (
        <p>No activities recorded.</p>
      ) : (
        <ul>
          {sortedActivities.map((activity: Activity) => (
            <li key={activity.id}>
              <strong>{new Date(activity.date).toLocaleDateString()}</strong>:{" "}
              {activity.steps} steps
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityLog;
