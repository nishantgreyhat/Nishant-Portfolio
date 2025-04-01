import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./loading.css"; // Import CSS file

const Loading = () => {
  return (
    <div className="loading-container">
      <DotLottieReact
        src="/loading2.lottie" // Reference from the `public` folder
        loop
        autoplay
        style={{ width: "200px", height: "200px" }} // Adjust size if needed
      />
      <h1 className="loadingText">Loading</h1>
    </div>
  );
};

export default Loading;

