// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "./cartRedux";
// import userReducer from "./userRedux";
// import orderReducer from "./orderRedux";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
// }
// const rootReducer = combineReducers({user: userReducer,cart: cartReducer,order: orderReducer})
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = 
//      configureStore({
//      reducer: persistedReducer,
//      middleware: (getDefaultMiddleware) =>
//      getDefaultMiddleware({
//         serializableCheck:{
//             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// })

// export let persistor = persistStore(store);
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
