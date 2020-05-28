// addTab
export const addTab = (state, tab) => {
  const isNew = state.tabs.find(({ url }) => url === tab.url) === undefined;
  if (isNew) {
    return {
      ...state,
      currentTab: tab.url,
      isOverlayVisible: false,
      tabs: [...state.tabs, tab]
    };
  } else {
    return { ...state, currentTab: tab.url, isOverlayVisible: false };
  }
};

// removeTab
export const removeTab = (state, tabUrl) => {
  let currentTab = "";
  // Find index of current tab
  const index = state.tabs.findIndex(({ url }) => url === tabUrl);
  //Find length of tabs array
  const length = state.tabs.length - 1;

  // Check if there's tab on the right
  if (index < length) {
    currentTab = state.tabs[index + 1].url;
  }
  // Check if there's a tab on the left
  else if (index > 0) {
    currentTab = state.tabs[index - 1].url;
  }

  const tabs = [...state.tabs.filter(({ url }) => url !== tabUrl)];

  return {
    ...state,
    tabs,
    currentTab,
    isOverlayVisible: tabs.length === 0 ? true : false
  };
};

// selectTab
export const selectTab = (state, url) => {
  return {
    ...state,
    currentTab: url
  };
};
