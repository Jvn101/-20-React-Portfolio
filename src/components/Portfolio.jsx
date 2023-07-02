import React from "react";
import Work from "./Work";

const projects = [
  {
    title: "Example 1",
    image: "/img/pocket-traders.png",
    description: "cool website"
  }
]

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Work projects={projects} />
    </div>
  );
}

export default Portfolio;