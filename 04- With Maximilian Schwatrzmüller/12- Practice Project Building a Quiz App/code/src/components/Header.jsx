import imageLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={imageLogo} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
