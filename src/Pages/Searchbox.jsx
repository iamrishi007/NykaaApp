
import '../Navbar.css';

function Searchbox() {
  return (
    <div className="searchbox">
      <input 
        type="text" 
        placeholder="Search on Nykaa" 
        className="search-input"
      />
      <button className="search-button">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="Search Icon" />
      </button>
    </div>
  );
}

export default Searchbox;
