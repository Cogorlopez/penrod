const toString = obj => {
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === "object") {
      return toString(obj[k]);
    }

    obj[k] = "" + obj[k];
  });

  return obj;
};

export default toString;
