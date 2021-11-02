let klasse = {
  bezeichnung: '4BHITM',
  klassenvorstand: 'Richard Wurzer',
  students: [],
  addStudent(...name) {
    for (const student of name) {
      this.students.push(student);
    }
  },
  delStudent(name) {
    this.students = this.students.filter((stdname) => stdname != name);
  },
  findStudent(name) {
    if (this.students.find((stdname) => stdname == name)) {
      return true;
    } else {
      return false;
    }
  },
};

// klasse.addStudent('Semler');
// klasse.addStudent('Hosseini');
// klasse.addStudent('Kirnberger', 'Losko', 'Eisenhut', 'Bily');
// console.log(klasse.students);
// console.log('------------------');
// klasse.delStudent('Bily');
// console.log(klasse.students);
// console.log(klasse.findStudent('Randavajseh'));
// console.log(klasse.findStudent('Kirnberger'));

let klasse2 = {
  bezeichnung: '4BHITM',
  klassenvorstand: 'Richard Wurzer',
  students: [],
  addStudent(...name) {
    for (const student of name) {
      if (student.hasOwnProperty('name') && student.hasOwnProperty('fehlstunden')) {
        this.students.push(student);
      }
    }
  },
  delStudent(name) {
    this.students = this.students.filter((stdname) => stdname.name != name);
  },
  findStudent(name) {
    if (this.students.find((stdname) => stdname.name == name)) {
      return true;
    } else {
      return false;
    }
  },
};

klasse2.addStudent({ name: 'Semler', fehlstunden: 0 });
klasse2.addStudent({ name: 'Hossaini', fehlstunden: 20 });
const students = [
  { name: 'Kirnberger', fehlstunden: 23 },
  { name: 'Losko', fehlstunden: 7 },
  { name: 'Bily', fehlstunden: 123 },
];
klasse2.addStudent(...students);
console.log(klasse2.students);
console.log('------------------');
klasse2.delStudent('Bily');
console.log(klasse2.students);
console.log(klasse2.findStudent('Randavajseh'));
console.log(klasse2.findStudent('Kirnberger'));

klasse2.sumMissingHours = function () {
  let summe = 0;
  for (const student of this.students) {
    summe += student.fehlstunden;
  }
  return summe;
};
console.log(klasse2.sumMissingHours());

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

const location = (obj, arg) => {
  if (obj.hasOwnProperty(arg)) {
    let erg = [];
    let index = 0;
    for (const key in obj[arg]) {
      erg.push({ [key]: obj[arg][key] });
      index++;
    }
    return erg;
  }
};
console.log(location(employee, 'location'));


