import React from "react";

const Flag = ({ country }) => {
  return (
    <div className="flag">
      <img
        alt={ `${ country } flag`} 
        src={ process.env.PUBLIC_URL + `/img/${ country.replace(/\s/g, '').toLowerCase() }.png` } 
      />
    </div>
  );
};

export default Flag;