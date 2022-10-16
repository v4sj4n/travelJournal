import worldIcon from "../assets/world-icon.png";

function Header() {
  return (
    <header>
      <img src={worldIcon} alt="" />
      <h2 id="header--title">my travel journal.</h2>
    </header>
  );
}

export default Header;
