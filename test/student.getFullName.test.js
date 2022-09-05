import Student from '../src/student';

test('student.getFullName()', () => {
  let obj = new Student(
    'Juan',
    'Pérez',
    'Zamora',
    new Date(1995, 11, 1),
    'juan@ucol.mx'
  );

  expect(obj.getFullName()).toBe('Juan Pérez Zamora');
});
