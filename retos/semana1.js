//input () output true
//input (] output false

const isValidString = array => {
  const container = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  let save = [];

  for (let i = 0; i < array.length; i++) {
    if (container[array[i]]) {
      save.push(array[i]);
    } else {
      let lastOpen = save[save.length - 1];
      if (container[lastOpen] !== array[i]) {
        return false;
      } else {
        save.pop();
      }
    }
  }
  return save.length === 0;
};

const final = isValidString("[()]");
console.log(final);
