import React from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
// Props are passed through our functional component.
function Portfolio(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-body content">
        <h5 className="card-title">{props.name}</h5>
        <a href={props.gitHub} id='portfolio-btn' target="blank" className="btn"><AiFillGithub className='portfolio-icons' /></a>
        <a href={props.app} id='portfolio-btn' target="blank" className="btn"><AiFillEye className='portfolio-icons' /></a>
      </div>

    </div>
  );
}

export default Portfolio;