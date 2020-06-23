let cleanhouse = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " cleaned the room");
  });
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " garbage removed");
  });
};

let winIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " won icecream ");
  });
};

let a = function () {};

cleanhouse()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIcecream(result);
  })
  .then(function (result) {
    console.log("all done" + result);
  });
