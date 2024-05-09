import axios from "axios";

export default async function List() {
  try {
    const response = await axios.get("https://dummyjson.com/recipes");
    return response.data?.recipes;
  } catch (e) {
    console.log(e);
    return false;
  }
}
