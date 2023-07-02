import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                  </a>
                </figure>
              </div>
              </div>
              </div>
              ))}
      </div>
    </div>
  );
}

export default Project;