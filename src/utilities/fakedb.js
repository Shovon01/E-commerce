// // use local storage as your db for now
// const addToDb = id => {
//   const exists = getDb();
//   let shopping_cart = {};
//   if (!exists) {
//     shopping_cart[id] = 1;
//   }
//   else {
//     shopping_cart = JSON.parse(exists);
//     if (shopping_cart[id]) {
//       const newCount = shopping_cart[id] + 1;
//       shopping_cart[id] = newCount;
//     }
//     else {
//       shopping_cart[id] = 1;
//     }
//   }
//   updateDb(shopping_cart);
// }

// const getDb = () => localStorage.getItem('shopping_cart');
// const updateDb = cart => {
//   localStorage.setItem('shopping_cart', JSON.stringify(cart));
// }

// const removeFromDb = id => {
//   const exists = getDb();
//   if (!exists) {

//   }
//   else {
//     const shopping_cart = JSON.parse(exists);
//     delete shopping_cart[id];
//     updateDb(shopping_cart);
//   }
// }

// const getStoredCart = () => {
//   const exists = getDb();
//   return exists ? JSON.parse(exists) : {};
// }

// const clearTheCart = () => {
//   localStorage.removeItem('shopping_cart');
// }

// export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }

const getUser = () => {
  const existingUser = sessionStorage.getItem("userId");
  if (existingUser) {
    return existingUser;
  } else {
    const newUser = "user-" + new Date().getTime();
    sessionStorage.setItem("userId", newUser);
    return newUser;
  }
};

const getDataKey = () => {
  const userId = getUser();
  return `emaJohn/carts/${userId}`;
};

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
  const dataKey = getDataKey();
  const data = localStorage.getItem(dataKey) || "{}";
  return JSON.parse(data);
};

const addToDatabaseCart = (key, count) => {
  const currentCart = getDatabaseCart();
  currentCart[key] = count;
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
};

const removeFromDatabaseCart = (key) => {
  const currentCart = getDatabaseCart();
  delete currentCart[key];
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
};

const processOrder = (cart) => {
  localStorage.removeItem(getDataKey());
};

export {
  addToDatabaseCart,
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
};

// polyfill to support older browser
const localStorage =
  window.localStorage ||
  (() => {
    let store = {};
    return {
      getItem(key) {
        return store[key];
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })();

const sessionStorage =
  window.sessionStorage ||
  (() => {
    let store = {};
    return {
      getItem(key) {
        return store[key];
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })();
// end of poly fill
