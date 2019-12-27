import React from 'react';
import classes from './ProfileInfo.module.css';


let ProfileInfo = (props) => {
  debugger 
  return <div>
    {props.profile.map( p => <div key={p.id}>

        <div>

        </div>

        <div>
          {p.fullname}
        </div>
      </div>
      )}
      
  </div>
       
};

export default ProfileInfo;