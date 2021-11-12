import { example1, example2 } from "../testing-scripts/objects";

test("Comparación de objetos", () => {
  expect(example1).toEqual(example2);
});
