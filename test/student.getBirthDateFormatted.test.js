import Student from '../src/student';

test('student.getBirthDateFormatted', () => {
  let obj = new Student(
    'jUan',
    'péReZ',
    'garCía',
    new Date(1995, 1, 10),
    'juan@ucol.mx'
  );

  expect(obj.getBirthDateFormatted()).toBe('Viernes 10 de Febrero de 1995');
});
