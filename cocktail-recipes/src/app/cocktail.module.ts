export interface Cocktail {
    id: string;
    name: string;
    category: string;
    alcoholic: string;
    glass: string;
    imageUrl: string;
    ingredients: Array<string>;
    instructions: string;
}