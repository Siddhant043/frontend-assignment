import { getModifiedRowData } from "../getModifiedRowData";
const row = {
  "s.no": 0,
  "amt.pledged": 15823,
  blurb:
    "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
  by: "Museum of Science Fiction",
  country: "US",
  currency: "usd",
  "end.time": "2016-11-01T23:59:00-04:00",
  location: "Washington, DC",
  "percentage.funded": 186,
  "num.backers": "219382",
  state: "DC",
  title: "Catalysts, Explorers & Secret Keepers: Women of SF",
  type: "Town",
  url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
};

test("Checking modified row data for Amount Pledged", () => {
  const header = "amt.pledged";
  const output = "$ 15823";
  expect(getModifiedRowData(row, header)).toBe(output);
});

test("Checking modified row data for Percentage Funded", () => {
  const header = "percentage.funded";
  const output = "186%";
  expect(getModifiedRowData(row, header)).toBe(output);
});

test("Checking modified row data for S.No.", () => {
  const header = "s.no";
  const output = 0;
  expect(getModifiedRowData(row, header)).toBe(output);
});
