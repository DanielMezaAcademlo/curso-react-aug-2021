import { suma } from "../testing-scripts/numbers";

describe("Pruebas con números", () => {
  test("La suma debe de ser 10", () => {
    expect(suma(1.1, 8.9)).toBe(10);
  });

  test("La suma debe de ser mayor que 10", () => {
    expect(suma(5, 6)).toBeGreaterThan(10);
  });

  // expect(suma(5, 6)).toBeGreaterThanOrEqual(3.5);
  // expect(suma(5, 6)).toBeLessThan(5);
  // expect(suma(5, 6)).toBeLessThanOrEqual(4.5);
});
