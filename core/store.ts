import {
    configureStore,
    ThunkAction,
    Action
} from '@reduxjs/toolkit';
import navigationReducer from './slices/navSlice';

export const store = configureStore({
    reducer: {
        navigationState: navigationReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;