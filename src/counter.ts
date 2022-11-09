import { QueryResult } from "@akrc/nashi";

export function setupCounter(button: QueryResult) {
  let counter = 0;
  button.click(() => button.text(`count is ${++counter}`));
  button.text(`count is 0`);
}
