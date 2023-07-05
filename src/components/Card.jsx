import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };


  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placekitten.com/`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Title: {props.title}</h5>
          <p className="card-text">Description: {props.description}</p>
          <a href="#" className="btn btn-primary">
            Adopt {props.title}
          </a>
        </div>
      </div>
    </div>
  );
}
