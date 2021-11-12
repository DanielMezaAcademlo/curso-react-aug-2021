import { users, users2 } from "../testing-scripts/arrays";

test("¿Existe algún estudiante llamado Santiago?", () => {
  expect(users).toContain("Santiago");
});

test("¿Existe algún estudiante llamado Santiago?", () => {
  expect(users2).toContainEqual({ name: "Santiago" });
});
