import { createContext, useContext, useReducer, ReactNode } from "react";

interface UserDetailsContextType {
    photoUrl: string;
    backButton: () => void;
    getBackButtonPhotoUrl: (url: string, backButton: () => void, refId: string, backOnClick: () => void, backOffClick: () => void, backHide: () => void, safeAreaInset: {}) => void;
    refId: string;
    backOnClick: (callback: () => void) => void;
    backOffClick: () => void;
    backHide: () => void;
    safeAreaInset: object
}

const initialState: UserDetailsContextType = {
    photoUrl: "",
    backButton: () => { },
    getBackButtonPhotoUrl: () => { },
    refId: "",
    backOnClick: () => { },
    backOffClick: () => { },
    backHide: () => { },
    safeAreaInset: {}
};

const userDetailsActions = {
    BACK_BUTTON_PHOTO_URL: "BACKBUTTON/PHOTOURL",
};

interface Action {
    type: string;
    payload: {
        url: string;
        backButtonFn: () => void;
        referralId: string;
        backOnClickFn: () => void;
        backOffClickFn: () => void;
        backHideFn: () => void;
        safeAreaInsetObj: object
    };
}

const UserDetailsContext = createContext<UserDetailsContextType>(initialState);

function reducer(state: UserDetailsContextType, action: Action): UserDetailsContextType {
    switch (action.type) {
        case userDetailsActions.BACK_BUTTON_PHOTO_URL:
            return {
                ...state,
                photoUrl: action.payload.url,
                backButton: action.payload.backButtonFn,
                refId: action.payload.referralId,
                backOnClick: action.payload.backOnClickFn,
                backOffClick: action.payload.backOffClickFn,
                backHide: action.payload.backHideFn,
                safeAreaInset: action.payload.safeAreaInsetObj
            };
        default:
            throw new Error("Unknown action type");
    }
}

function UserDetailsProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getBackButtonPhotoUrl = (
        url: string,
        backButtonFn: () => void,
        referralId: string,
        backOnClickFn: () => void,
        backOffClickFn: () => void,
        backHideFn: () => void,
        safeAreaInsetObj: {}
    ) => {
        dispatch({
            type: userDetailsActions.BACK_BUTTON_PHOTO_URL,
            payload: { url, backButtonFn, referralId, backOnClickFn, backOffClickFn, backHideFn, safeAreaInsetObj },
        });
    };

    return (
        <UserDetailsContext.Provider value={{ ...state, getBackButtonPhotoUrl }}>
            {children}
        </UserDetailsContext.Provider>
    );
}

function useUserDetails() {
    const context = useContext(UserDetailsContext);
    if (context === undefined)
        throw new Error("UserDetailsContext was used outside UserDetailsProvider");
    return context;
}

export { UserDetailsProvider, useUserDetails };