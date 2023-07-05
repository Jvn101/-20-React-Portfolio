import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "JavaScript Password Generator",
    image: "/Images/passwordGenerator.png",
    description: "Website showcasing a random password generator that outputs passwords based on a set of criteria with options selected by the user.",
    repository: "https://github.com/Jvn101/03-JavaScript-Password-Generator",
    deployedlink: "https://jvn101.github.io/03-JavaScript-Password-Generator/"
  },
  {
    title: "Web APIs Code Quiz",
    image: "/Images/webAPIQuiz.png",
    description: "Timed quiz using JavaScript that stores high scores.",
    repository: "https://github.com/Jvn101/04-Web-APIs-Code-Quiz",
    deployedlink: "https://jvn101.github.io/04-Web-APIs-Code-Quiz/"
  },
  {
    title: "Server Side APIs Weather Dashboard",
    image: "/Images/weatherAPI.png",
    description: "Weather dashboard that features todays weather followed by a five day forecast.",
    repository: "https://github.com/Jvn101/06-Server-Side-APIs-Weather-Dashboard",
    deployedlink: "https://jvn101.github.io/06-Server-Side-APIs-Weather-Dashboard/"
  },
  {
    title: "Express.js Note Taker",
    image: "Images/noteTaker.png",
    description: "This application is called Note Taker and can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    repository: "https://github.com/Jvn101/11-Express.js-Note-Taker",
    deployedlink: "https://notetakerapplication-week11.herokuapp.com/"
  },
  {
    title: "MVC Tech Blog",
    image: "/Images/TheTechBlog.png",
    description: "This application is a CMS-style blog site (similar to a Wordpress site), where developers can publish their blog posts and comment on other developers posts as well.",
    repository: "https://github.com/Jvn101/14-MVC-Tech-Blog",
    deployedlink: ""
  },
  {
    title: "NoSQL Social Network API",
    image: "/Images/NoSQLSocialNetwork.png",
    description: "This application ia an API for a social network web page where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    repository: "https://github.com/Jvn101/18-NoSQL-Social-Network-API",
    deployedlink: ""
  }
]

function Portfolio() {
  return (
    <div>
      <p>Portfolio</p>
      <Card title={projects.title} description={projects.description} />
    </div>
  );
}

export default Portfolio;