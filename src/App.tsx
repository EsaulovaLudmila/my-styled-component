import React from "react";
import { Card } from "./layout/card/Card";
import imgCard from "./../src/assets/images/imgcard.png";

function App() {
  return (
    <Card
      title="Headline"
      text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
      src={imgCard}
    />
  );
}

export default App;
