import  { useState ,useRef} from 'react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const navRef= useRef(null) ;
  const handleItemClick = (index) => {
    setActiveIndex(index);
    //console.log(navRef.current.querySelectorAll('.side-nav__item')[index].querySelector('.side-nav__link'))
  };

  return (
    <nav className="sidebar">
      <ul className="side-nav" ref={navRef}>
        <li
          className={`side-nav__item ${activeIndex === 0 ? 'side-nav__item--active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-home"></use>
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li
          className={`side-nav__item ${activeIndex === 1 ? 'side-nav__item--active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li
          className={`side-nav__item ${activeIndex === 2 ? 'side-nav__item--active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li
          className={`side-nav__item ${activeIndex === 3 ? 'side-nav__item--active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-map"></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2024 by BDHOTEL. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
/*import React, { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize the first item as active
  const navRef = useRef(null);

  useEffect(() => {
    const allLi = navRef.current.querySelectorAll('.side-nav__item');
    
    const handleClick = (index) => {
      setActiveIndex(index);
    };

    allLi.forEach((li, index) => {
      li.addEventListener('click', () => handleClick(index));
    });

    // Cleanup function to remove event listeners
    return () => {
      allLi.forEach((li) => {
        li.removeEventListener('click', () => handleClick(index));
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <nav className="sidebar">
      <ul className="side-nav" ref={navRef}>
        <li className={`side-nav__item ${activeIndex === 0 ? 'side-nav__item--active' : ''}`}>
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-home"></use>
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li className={`side-nav__item ${activeIndex === 1 ? 'side-nav__item--active' : ''}`}>
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className={`side-nav__item ${activeIndex === 2 ? 'side-nav__item--active' : ''}`}>
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className={`side-nav__item ${activeIndex === 3 ? 'side-nav__item--active' : ''}`}>
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-map"></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2024 by BDHOTEL. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
*/