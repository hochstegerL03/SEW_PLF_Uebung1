const employee = {
  id: '1',
  gender: 'male',
  name: { title: 'Mr', first: 'Jonas', last: 'Berger' },
  location: {
    street: '1469 route de genas',
    city: 'saint-denis',
    state: 'saône-et-loire',
    postcode: 43181,
  },
  email: 'berger@example.com',
  dob: { date: '1962-11-04T05:47:30Z', age: 56 },
  registered: { date: '2004-10-16T09:30:03Z', age: 14 },
  phone: '05-65-50-52-66',
  cell: '06-33-21-84-33',
  picture: {
    large: `/images/portraits/men/41.jpg`,
  },
  nat: 'FR',
};

function location(obj) {
  let { street, city, state, postcode } = { ...obj.location };
  let erg = [{ street: street }, { city: city }, { state: state }, { postcode: postcode }];
  return erg;
}

let { email } = { ...employee };
let person = { ...employee.name, email, ...employee.picture };

console.log(person);
console.log(location(employee));
