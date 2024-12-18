import { ProjectFetchedType } from "../lib/api/projects/types";

export const getMappedKey = (key: keyof ProjectFetchedType | string) => {
  switch (key) {
    case "s.no":
      return "S.No.";
    case "amt.pledged":
      return "Amount Pledged";
    case "blurb":
      return "Blurb";
    case "by":
      return "By";
    case "country":
      return "Country";
    case "end.time":
      return "End Time";
    case "location":
      return "Location";
    case "num.backers":
      return "Number of Backers";
    case "percentage.funded":
      return "Percentage Funded";
    case "state":
      return "State";
    case "title":
      return "Title";
    case "type":
      return "Type";
    case "url":
      return "URL";
  }
};
