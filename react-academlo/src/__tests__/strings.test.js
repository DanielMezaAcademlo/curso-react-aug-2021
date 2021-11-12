import { saludo, HolaMundo } from "../testing-scripts/strings";
// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });

test("Debe ser Hola Daniel", () => {
  const name = "Daniel";
  expect(saludo(name)).toBe("Hola Daniel");
});

test("Debe de contener la palabra Hola", () => {
  expect(HolaMundo()).toMatch(/Hola/);
});
