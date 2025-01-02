const Navbar: React.FC = () => (
  <header className="navbar">
    <input type="text" placeholder="Search for something" />
    <div className="profile">
      <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
    </div>
  </header>
);

export default Navbar;
