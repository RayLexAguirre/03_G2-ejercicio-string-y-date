import Student from '../src/student';

test('student.getDayOfBirth', () => {
  let obj = new Student(
    'jUan',
    'péReZ',
    'garCía',
    new Date(1995, 1, 10),
    'juan@ucol.mx'
  );

  expect(obj.getDayOfBirth().toLowerCase()).toBe('viernes');
});
