import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tabs-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={30} /> */}

      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"20"} /> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator component */}
      {/* <QRCodeGenerator /> */}

      {/* Theme change component */}
      {/* <LightDarkMode /> */}

      {/* Scoll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custome tabs component */}
      {/* <TabTest /> */}

      {/* Custom Modal Component  */}
      {/* <ModalTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Serch Autocomplete  */}
      <SearchAutocomplete />
    </div>
  );
}

export default App;
