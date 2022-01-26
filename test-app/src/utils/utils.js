import axios from "axios";

async function getUsers() {
  const response = await axios.get("https://api.github.com/users");

  return response;
}

export default getUsers;
