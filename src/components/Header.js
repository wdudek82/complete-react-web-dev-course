import React from 'react';

const Header = (props) => {
  const title = props.title;
  const subtitle = (
    props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>
  );

  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{title}</h1>
        {subtitle}
      </div>
    </div>
  );
};

// Default props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;