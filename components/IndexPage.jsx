// CSS
import './IndexPage.css';

// Components
import SwitchModeIndex from "./SwitchModeIndex";
import SearchBar from "./SearchBar";

const IndexPage = () => {
  return (
    <>
      <SwitchModeIndex/>
      <div className="search-bar-container">
        <p>
          <span className="gradient-text">Wiki</span> explorer
        </p>
        <SearchBar/>
      </div>
    </>
  )
}

export default IndexPage