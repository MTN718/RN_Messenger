
const AppContextProvider = (isSignIn, setSignIn) => {
    return {
        authState: isSignIn,
        setSignIn
    }
};

export default AppContextProvider;