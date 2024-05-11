import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import fetchRecipeDetails from "@/app/server-action/details";
import { GetRecipeDetailsType } from "@/components/interfaces";
import RecipeDetailsItem from "@/components/recipe-list/recipeDetailsItem";


export default async function RecipeDetails({ params }: any) {
  const getRecipeDetails: GetRecipeDetailsType = await fetchRecipeDetails(
    params?.details
  );

  // console.log(params?.details);

  if (!getRecipeDetails) {
    // Render an error message with a link back to the home page
    
    return (
      <div className="text-center">
        <p>Oops! Recipe details not found.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to home page
        </Link>
      </div>
    );
  }



  // Render the RecipeDetailsItem component with the fetched recipe details
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
