function Title() {
  return <h2>Taskify</h2>;
}

function Subtitle() {
  return <h3>Organize your tasks efficiently</h3>;
}
function Header() {
  return (
    <div>
      <Title />
      <Subtitle />
    </div>
  );
}

export default Header;
