import { menuItems } from "constants/reduxdata/menudata";

const initialState = {
  items: menuItems,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
     
    default:
      return state;
  }
};

export default menuReducer;
