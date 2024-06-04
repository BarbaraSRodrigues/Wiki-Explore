// CSS
import './IndexPage.css';

// Components
import SwitchModeIndex from "./SwitchModeIndex";
import SearchBar from "./SearchBar";

const IndexPage = ({ callback }) => {

  const returnDocuments = (value) =>{
    callback(value);
  };

  return (
    <>
      <SwitchModeIndex/>
      <div className="search-bar-container">
        <p>
          <span className="gradient-text">Wiki</span> explorer
        </p>
        <SearchBar callback={returnDocuments}/>
      </div>
    </>
  )
}

export default IndexPage