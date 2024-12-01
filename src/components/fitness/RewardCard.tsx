// src/components/fitness/RewardCard.tsx

import React from "react";
import { useFitnessData } from "../../hooks/useFitnessData";
import { Reward } from "../../types/fitness";

interface RewardCardProps {}

const RewardCard: React.FC<RewardCardProps> = () => {
  const { rewards } = useFitnessData();

  return (
    <div>
      <h2>Your Rewards</h2>
      {rewards.length === 0 ? (
        <p>You haven't earned any rewards yet.</p>
      ) : (
        <ul>
          {rewards.map((reward: Reward) => (
            <li key={reward.id}>
              <strong>{reward.title}</strong> - {reward.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RewardCard;
