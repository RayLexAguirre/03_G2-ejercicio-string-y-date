import Student from '../src/student';

test('student.getFullNameCapitalized', () => {
  let obj = new Student(
    'jUan',
    'péReZ',
    'garCía',
    new Date(1995, 11, 1),
    'juan@ucol.mx'
  );

  expect(obj.getFullNameCapitalized()).toBe('Juan Pérez García');
});
