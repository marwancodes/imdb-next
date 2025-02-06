import { notFound } from "next/navigation";
import Results from "@/components/Results";

interface SearchPageProps {
    params: Promise<{ searchTerm: string }>; // Ensure it's a Promise
};

const SearchPage = async ({ params }: SearchPageProps) => {
    const { searchTerm } = await params; // Await the params

    if (!searchTerm) {
        return notFound();
    }

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
            { cache: "no-store" } // Ensures fresh results
        );

        if (!res.ok) {
            return notFound();
        }

        const data = await res.json();
        const results = data.results || [];

        return (
            <div>
                {results.length === 0 ? (
                    <h1 className="text-center pt-6">No Results</h1>
                ) : (
                    <Results results={results} />
                )}
            </div>
        );
    } catch (error) {
        console.error("Error fetching movies:", error);
        return notFound();
    }
};

export default SearchPage;
