class localStorageService {
  ls = window.localStorage;

  setItem(key, value) {
    this.ls.setItem(key, JSON.stringify(value));
    return true;
  }

  getItem(key) {
    let value = this.ls.getItem(key);

    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }
  removeItem(key) {
    this.ls.removeItem(key);
    return true;
  }
}
