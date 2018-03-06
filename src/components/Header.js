import React from 'react';

const Header = (props) => {
  const title = props.title;
  const subtitle = (
    props.subtitle && <h2>{props.subtitle}</h2>
  );

  return (
    <div>
      <h1>{title}</h1>
      {subtitle}
    </div>
  );
};

// Default props
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;