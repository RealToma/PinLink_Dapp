export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('viewState', JSON.stringify(state.view));
    return result;
  };
  