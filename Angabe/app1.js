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
const z2 = (a) => a * b;

const x2 = (end, z1, z2) => {
  let summe = 0;
  for (let i = 3; i <= end; i++) {
    i % z1 == 0 ? (summe += i) : (summe = summe);
    i % z2 == 0 ? (summe += i) : (summe = summe);
  }
  return summe;
};

console.log(`z: ${z(10)}; z2: ${z2(10)}; x: ${x(10, 1, 2)}; x2: ${x2(10, 1, 2)}`);
