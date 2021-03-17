export default function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("favs", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }