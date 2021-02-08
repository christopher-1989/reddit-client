export const menuClick = menuClicked => {
    return {
      type: "CLICK",
      payload: !menuClicked
    };
  };