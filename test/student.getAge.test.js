import Student from '../src/student';

test('student.getAge', () => {
  let obj = new Student(
    'jUan',
    'péReZ',
    'garCía',
    new Date(1995, 1, 10),
    'juan@ucol.mx'
  );

  expect(obj.getAge()).toBe(26);
});
