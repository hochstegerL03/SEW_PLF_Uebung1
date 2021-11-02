const b = 2.71;
function z(a) {
  return a * b;
}
function x(end, z1, z2) {
  let summe = 0;
  for (let i = 3; i <= end; i++) {
    if (i % z1 == 0) summe += i;
    if (i % z2 == 0) summe += i;
  }
  return summe;
}

module.exports = {
  b: b,
  z: z,
  x: x,
};
