/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

const Head = () => {
  const [Fom, SetFom] = useState(true);
  return (
    <div className="header-container">
      <a href="#!" onClick={() => { SetFom(!Fom); }}>Edit</a>
      <div className="flex">
        <h1 className="heading">Hi, </h1>
        <form>
          <input type="text" className="inputy" disabled={Fom} />
        </form>
      </div>
      <p className="header-content">
        Welcome back to your
        <span className="money-manager-text"> Lives Manager</span>
      </p>
    </div>
  );
};

export default Head;
