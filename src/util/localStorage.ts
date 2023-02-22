export function saveStateToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('@stock-control:products-state', serializedState);
  } catch (error) {
    console.error(error);
  }
}

export function loadStateFromLocalStorage() {
  try {
    const storedStateAsJSON = localStorage.getItem('@stock-control:products-state');
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }
    return {
      products: [],
      product: null
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
}