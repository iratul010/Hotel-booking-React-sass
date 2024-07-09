import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="content">
      <Sidebar />
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__item">
            <img
              src="../src/assets/img/hotel-1.jpg"
              alt="Hotel photo 1"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src="../src/assets/img/hotel-2.jpg"
              alt="Hotel photo 2"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src="../src/assets/img/hotel-3.jpg"
              alt="Hotel photo 3"
              className="gallery__photo"
            />
          </figure>
        </div>
        <div className="overview">
          <h1 className="overview__heading">Hotel Bd Cox&apos;s bazar</h1>
          <div className="overview__stars">
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className="overview__icon-star">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
          <div className="overview__location">
            <svg className="overview__icon-location">
              <use xlinkHref="../src/assets/img/sprite.svg#icon-location-pin"></use>
            </svg>
            <button className="btn-inline">Chattogram, Dhaka</button>
          </div>
          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count"> 429 votes</div>
          </div>
        </div>
        <div className="detail">
          <div className="description">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi dignissimos debitis ratione sapiente saepe. Accusantium
              cumque, quas, ut corporis incidunt deserunt quae architecto
              voluptate.
            </p>
            <p className="paragraph">
              Accusantium cumque, quas, ut corporis incidunt deserunt quae
              architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>

            <ul className="list">
              <li className="list__item">Close to the beach</li>
              <li className="list__item">Breakfast include</li>
              <li className="list__item">Free airport shuttle</li>
              <li className="list__item">Free wifi in all rooms</li>
              <li className="list__item">Air condition and heating</li>
              <li className="list__item">Pets allowed</li>
              <li className="list__item">We speak all languages</li>
              <li className="list__item">Perfect for families</li>
            </ul>
            <div className="recommend">
              <p className="recommend__count">
                Nawsad and 3 other friends recommend this hotel
              </p>
              <div className="recommend__friends ">
                <img
                  src="../src/assets/img/user-3.jpg"
                  alt="friends 1"
                  className="recommend__photo"
                />
                <img
                  src="../src/assets/img/user-4.jpg"
                  alt="friends 1"
                  className="recommend__photo"
                />
                <img
                  src="../src/assets/img/user-5.jpg"
                  alt="friends 1"
                  className="recommend__photo"
                />
                <img
                  src="../src/assets/img/user-6.jpg"
                  alt="friends 1"
                  className="recommend__photo"
                />
              </div>
            </div>
          </div>
          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src="../src/assets/img/user-1.jpg"
                  alt="user 1"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Istiak Ahmed</p>
                  <p className="review__user-date">Feb 23rd, 24</p>
                </div>
                <div className="review__user-rating">7.8</div>
              </figcaption>
            </figure>
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src="../src/assets/img/user-2.jpg"
                  alt="user 2"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Sharmin</p>
                  <p className="review__user-date">Feb 23rd, 24</p>
                </div>
                <div className="review__user-rating">7.8</div>
              </figcaption>
            </figure>
            <button className="btn-inline">
              Show all <span>&rarr;</span>
            </button>
          </div>
         
        </div>
        <div className="cta">
            <h2 className="cta__book-now">
            Good news! we have 4 free rooms your seleced dates!
            </h2>
            <button className="btn">
              <span className="btn__visible">Book now</span>
               <span className="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
      </main>
    </div>
  );
};

export default Home;
