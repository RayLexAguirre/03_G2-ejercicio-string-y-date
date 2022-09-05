import Student from '../src/student';

test('student.isValidEmail()', () => {
  let obj = new Student(
    'jUan',
    'péReZ',
    'garCía',
    new Date(1995, 1, 10),
    'juan@ucol.mx'
  );

  expect(obj.isValidEmail()).toBe(true);

  obj.email = '@ucol.mx';
  expect(obj.isValidEmail()).toBe(false);

  obj.email = 'x@gmail.com';
  expect(obj.isValidEmail()).toBe(false);

  obj.email = 'xgmail.com';
  expect(obj.isValidEmail()).toBe(false);

  obj.email = 'x@';
  expect(obj.isValidEmail()).toBe(false);
});
