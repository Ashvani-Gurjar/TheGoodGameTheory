import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
     return (
          <>
               <div className='col-md-4 col-10 mx-auto'>
                    <div className="card" >
                         <img src={props.imgsrc} className="card-img-top" alt={props.title} />
                         <div class="card-body">
                              <h5 className="card-title">{props.name}</h5>
                              <p className="card-text">{props.title}</p>
                              <NavLink to="" className="btn btn-primary">Buy Now</NavLink>
                         </div>
                       </div>
                    </div>
          </>
     )
}

export default Card;