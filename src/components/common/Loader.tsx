// src/components/common/Loader.tsx

import React from "react";
import "./Loader.css"; // Import corresponding CSS module

interface LoaderProps {
  size?: number; // Size of the loader in pixels
}

const Loader: React.FC<LoaderProps> = ({ size = 40 }) => {
  return (
    <div
      className="loader"
      style={{ width: size, height: size }}
      aria-label="Loading"
    />
  );
};

export default Loader;
