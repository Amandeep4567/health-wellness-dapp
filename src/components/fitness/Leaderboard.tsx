// src/components/fitness/Leaderboard.tsx

import React, { useEffect, useState } from "react";
import { fetchLeaderboard } from "../../services/fitnessService";
import { LeaderboardEntry } from "../../types/fitness";

interface LeaderboardProps {}

const Leaderboard: React.FC<LeaderboardProps> = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const data = await fetchLeaderboard();
        setLeaderboard(data);
      } catch (err) {
        setError("Failed to fetch leaderboard data.");
      }
    };
    getLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      {error && <p className="error">{error}</p>}
      {leaderboard.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <ol>
          {leaderboard.map((entry, index) => (
            <li key={entry.userId}>
              <strong>
                {index + 1}. {entry.username}
              </strong>{" "}
              - {entry.totalSteps} steps
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Leaderboard;
