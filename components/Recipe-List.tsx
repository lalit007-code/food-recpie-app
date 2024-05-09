import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function RecipeList({ recipe }: { recipe: any[] }) {
  // Assuming recipe is an array
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipe.map((recipeItem: any) => (
            <Link href={`/recipe-list/${recipeItem.id}`} key={recipeItem.id}>
              <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                    <img
                      src={recipeItem.image}
                      alt={recipeItem.name}
                      className="object-cover object-top h-full w-full"
                    />
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
