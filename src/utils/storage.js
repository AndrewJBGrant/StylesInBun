export const set_ToLS = (key, value) => {
window.localStorage.setItem(key, JSON.stringify(value));
}

export const get_FromLS = key => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value)
  }
}


// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
