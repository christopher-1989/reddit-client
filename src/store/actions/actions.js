export const menuClick = menuClicked => {
    return {
      type: "CLICK",
      payload: !menuClicked
    };
  };

export const getPageTitle = pageTitle => {
  return {
    type: "GET_PAGE_TITLE",
    payload: pageTitle
  }
}