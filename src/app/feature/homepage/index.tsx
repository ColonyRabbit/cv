import React from "react";
import Left from "./allcomponents/Left";
import Right from "./allcomponents/Right";

const HomePage = () => {
  return (
    <div className="w-auto h-auto flex px-48 py-10">
      {/* left */}
      <Left />
      {/* right */}
      <Right />
    </div>
  );
};

export default HomePage;
