import { RecipeList } from "@/components/recipe-list/Recipe-List";

import List from "../server-action/Recipes";

export default async function Recipes() {
  const fetchList = await List();

  return (
    <div>
      <RecipeList recipe={fetchList} />
    </div>
  );
}
