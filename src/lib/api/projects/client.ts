import axios from "axios";

export const getProjects = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
