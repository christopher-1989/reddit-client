export const click = menuClicked => {
    return {
      type: "CLICK",
      payload: !menuClicked
    };
  };