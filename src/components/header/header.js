const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h2>Наш телефон</h2>
        <a href="">+996 705 188 955</a>
        <a href="">+996 555 188 955</a>
        <div className="work-time">
          <img src="" alt="" />
          <span>работаем с 10:00 до 00:00</span>
        </div>
      </div>
      <div className="right">
        <div className="sity">
          <h3>Город:</h3>
          <h2>Бишкек</h2>
        </div>
        <div className="search">
          <span className="review">Отзывы</span>
          <span className="delivery">Доставка и оплата</span>
        </div>
      </div>
    </header>
  )
}

export default Header;