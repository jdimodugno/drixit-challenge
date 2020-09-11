interface ISize {
  w: number,
  h: number,
}

interface ISizes {
  [x:string]: ISize,
}

const sizes : ISizes = {
  small: {w: 16, h: 16},
  medium: {w: 20, h: 20},
  large: {w: 36, h: 36}
};

export default sizes;
