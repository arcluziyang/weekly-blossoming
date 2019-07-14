// eslint-disable-next-line func-names
const reverseString = function (s) {
  const len = s.length;

  if (!len) {
    return s;
  }

  const halfLen = Math.ceil(len / 2);

  s.forEach((_item, i) => {
    if (i + 1 <= halfLen) {
      const current = s[i];
      s[i] = s[len - i - 1];
      s[len - i - 1] = current;
    }
  });
  return s;
};

export default reverseString;
