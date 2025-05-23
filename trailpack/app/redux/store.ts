import {configureStore} from '@reduxjs/toolkit';
import userDetails from './slice'

const store = configureStore({
    reducer :{
        usersave : userDetails
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;