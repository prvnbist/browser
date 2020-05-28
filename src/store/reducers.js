import { tabs } from "../helpers";

const reducers = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TAB": {
      return tabs.addTab(state, payload);
    }
    case "SWITCH_TAB":
      return tabs.selectTab(state, payload);
    case "CLOSE_TAB":
      return tabs.removeTab(state, payload);
    case "TOGGLE_OVERLAY":
      return { ...state, isOverlayVisible: !state.isOverlayVisible };
    default:
      break;
  }
};

export default reducers;
