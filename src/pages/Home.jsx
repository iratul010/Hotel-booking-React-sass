import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="content">
      <Sidebar />
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__item">
            <img src="../src/assets/img/hotel-1.jpg" alt="Hotel photo 1" className="gallery__photo" />
          </figure>
          <figure className="gallery__item">
            <img src="../src/assets/img/hotel-2.jpg" alt="Hotel photo 2" className="gallery__photo" />
          </figure>
          <figure className="gallery__item">
            <img src="../src/assets/img/hotel-3.jpg" alt="Hotel photo 3" className="gallery__photo" />
          </figure>
        </div>
        <div className="overview">
          <h1 className="overview__heading">
            Hotel Bd  Cox&apos;s  bazar
          </h1>
          <div className="overview__stars">
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star">
              </use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star">
              </use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star">
              </use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star">
              </use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star">
              </use>
            </svg>
          </div>
          <div className="overview__location">
          <svg className="overview__icon-location">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-location-pin">
              </use>
            </svg>
            <button className="btn-inline">Chattogram, Dhaka</button>
          </div>
          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count"> 429 votes</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
