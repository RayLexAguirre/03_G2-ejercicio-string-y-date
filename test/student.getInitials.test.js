import Student from '../src/student';

test('student.getInitials()', () => {
  let obj = new Student(
    'juan',
    'pérez',
    'garcía',
    new Date(1995, 11, 1),
    'juan@ucol.mx'
  );

  expect(obj.getInitials()).toBe('JPG');
});
