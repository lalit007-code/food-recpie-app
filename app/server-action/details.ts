import axios from "axios";

export default async function fetchRecipeDetails(currentRecipeId: any) {
  try {
    // console.log(currentRecipeId)
    const recipeDetails = await axios(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    // console.log(recipeDetails);
    return recipeDetails?.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}
