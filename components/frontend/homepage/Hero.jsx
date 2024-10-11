import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/chenanda-ainmane.mp4" // Replace with your video source
        controls={false}
        muted
        autoPlay
        loop
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
