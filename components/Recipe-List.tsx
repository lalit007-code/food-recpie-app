import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function RecipeList({ recipe }: { recipe: any[] }) {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipe.map((recipeItem: any) => (
            <Link href={`/recipe-list/${recipeItem.id}`} key={recipeItem.id}>
              <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <div className="relative w-full aspect-w-4 aspect-h-3">
                    <img
                      src={recipeItem.image}
                      alt={recipeItem.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      className="rounded-t-md"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {recipeItem.name}
                    </h3>
                    <p className="text-gray-600">{recipeItem.cuisine}</p>
                    <p className="text-gray-600">
                      Difficulty: {recipeItem.difficulty}
                    </p>
                    <p className="text-gray-600">Rating: {recipeItem.rating}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
