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
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      {/* <SearchAutocomplete /> */}

      {/* Tic-Tac-Toe component  */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook
      <UseFetchHookTest /> */}

      {/* Use OnClick Outside Hook Test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Widow Resize Hook Test */}
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
