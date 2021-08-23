const initialState = {
  isLoading: false,
  isLoggedIn: "",
  isProfileUpdated: "",
  openDropdown: {
    account: false,
    notification: false,
  },
};

const general = (state = initialState, action) => {
  if (action.type === "SET_IS_LOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  if (action.type === "SET_IS_LOGGED_IN") {
    return {
      ...state,
      isLoggedIn: action.value,
    };
  }

  if (action.type === "SET_PROFILE_UPDATED") {
    return {
      ...state,
      isProfileUpdated: action.value,
    };
  }

  if (action.type === "SET_OPEN_DROPDOWN") {
    return {
      ...state,
      openDropdown: {
        ...action.data,
      },
    };
  }

  return state;
};

export { general };
