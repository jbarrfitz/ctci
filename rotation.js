const isRotation = (str1, str2) => {
  if (!str1 || !str2) {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return false;
  }

  return (str1 + str1).includes(str2);
};

console.log(isRotation('erbottlewat', 'waterbottle'));
console.log(isRotation('reakthroughb', 'breakthrough'));
console.log(isRotation('erbottlewas', 'waterbottle'));
console.log(isRotation('waterbottle', 'waterbottle'));
