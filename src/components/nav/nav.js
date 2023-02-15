import Logo from '../../assets/images/Logo.png';
import menuImg from '../../assets/images/menuImg.png';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu-group">
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Пицца</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Сеты</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>WOK</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Роллы</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Суши</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Салаты</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Супы</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Корн доги</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Напитки</span>
        </div>
        <div className="menu-item">
          <img src={menuImg} alt="" />
          <span>Акции</span>
        </div>
      </div>
    </nav>
  )
}

export default Nav;