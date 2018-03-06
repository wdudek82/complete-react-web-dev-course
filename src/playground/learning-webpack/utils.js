console.log('loading utils.js');

const square = x => x**2;

const add = (x, y) => x + y;


export {
  square,
  add
};

// const subtract = (x, y) => x - y;

// export default subtract;

export default (x, y) => x - y;