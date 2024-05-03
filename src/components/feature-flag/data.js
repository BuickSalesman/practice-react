const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagsDataSeviceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Error, try again!");
  });
}

export default featureFlagsDataSeviceCall;
