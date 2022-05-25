const Header = ({ fetchVideos }) => {
  const handleChange = (e) => {
    const searchText = e.target.value.trim();
    if (searchText.length <= 0) {
      return;
    }
    fetchVideos(searchText);
  };

  return (
    <header className="App-header">
      <img src="/brand-logo.svg" className="brand-logo" alt="logo" />

      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleChange}
      />

      <img
        src="https://images.pexels.com/photos/3116381/pexels-photo-3116381.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="user-profile"
        className="avatar"
      />
    </header>
  );
};

export default Header;
