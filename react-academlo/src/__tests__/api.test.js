import { handleFetchData, handleFetchPokemon } from "../testing-scripts/api";

test("El código debe de ser 200", async () => {
  const { cod } = await handleFetchData("madrid");
  expect(cod).toBe(200);
});

test("El pokemon debe de existir", async () => {
  const data = await handleFetchPokemon("ditto");
  expect(data.id).toBeTruthy();
});
