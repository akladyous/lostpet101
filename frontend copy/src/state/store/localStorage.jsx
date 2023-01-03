export const loadState = () => {
    try {
        const state = window.sessionStorage.getItem('state');
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        window.sessionStorage.setItem('state', serializedState);
    } catch (err) {
        console.log('error save to window.sessionStorage');
    }
};
