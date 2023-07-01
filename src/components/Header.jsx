import headerLogo from "../images/svg/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип сайта Место" src={headerLogo} />
    </header>
  );
}

export default Header;
