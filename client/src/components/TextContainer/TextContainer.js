import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      
    </div>
    {
      users
        ? (
          <div>
          <h2>Online Users:</h2>
            <div className="activeContainer">
          
            <div>
            <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>

            </div>
           
             
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;