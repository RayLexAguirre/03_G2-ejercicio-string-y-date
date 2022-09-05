import Student from '../src/student';

test('student.constructor()', () => {
  let obj = new Student(
    'Juan',
    'Pérez',
    'Zamora',
    new Date(1995, 11, 1),
    'juan@ucol.mx'
  );

  expect(obj.name).toBe('Juan');
  expect(obj.firstLastName).toBe('Pérez');
  expect(obj.secondLastName).toBe('Zamora');
  expect(obj.birthDate.getFullYear()).toEqual(1995);
  expect(obj.birthDate.getMonth()).toEqual(11);
  expect(obj.birthDate.getDate()).toEqual(1);
  expect(obj.email).toBe('juan@ucol.mx');
});
