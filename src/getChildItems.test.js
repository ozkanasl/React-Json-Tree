import data from "./data";
import getChildItems from "./getChildItems";



it("returns empty", () => {
  expect(
    getChildItems(data, 77)
  ).toEqual([]);
});


it("returns one item", () => {
  expect(
    getChildItems(data, 72)
  ).toEqual([ {
    "ID": 82,
    "parentID": 72,
    "Phone": "(770) 741-5391",
    "City": "San Giuliano di Puglia",
    "Name": "Burke"
  } ]);
});

it("if data does not exist returns undefined", () => {
  expect(
    getChildItems(undefined, 72)
  ).toEqual(undefined);
});


it("returns empty array", () => {
  expect(
    getChildItems(data, null)
  ).toEqual([]);
});
