/**
 * @param {string} str
 * @return {string}
 */
export default function toLowerCase(str) {
  const arr = str.split('');
  const newArr = arr.map((item) => {
    let code = item.charCodeAt();
    if (code >= 65 && code <= 90) {
      code += 32;
      return String.fromCharCode(code);
    } else {
      return item;
    }
  });
  return newArr.join('');
}
