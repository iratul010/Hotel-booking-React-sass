const Navbar = () => {
  return (
    <header className="navbar">
      <img
        src="../src/assets/icon/logo.png"
        alt="hotel logo"
        className="navbar__logo"
      />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref="../src/assets/img/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="../src/assets/img/sprite.svg#icon-bookmark"></use>
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="../src/assets/img/sprite.svg#icon-chat"></use>
          </svg>
          <span className="user-nav__notification">13</span>
        </div>

        <div className="user-nav__user">
          <img
            src="../src/assets/img/ratul.png"
            alt="User Photo"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Ratul Islam</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
