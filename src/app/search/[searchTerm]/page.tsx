import Results from "@/components/Results";

type SearchPageProps = {
    params: {
      searchTerm: string;
    };
  };

const SearchPage = async ({ params }: SearchPageProps) => {

    const searchTerm = (await params).searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
    const data = await res.json();
    const results = data.results;

  return (
    <div>
        {results && results.length === (<h1 className="text-center pt-6">No Results</h1>)}
        {results && <Results results={results}/>}
    </div>
  )
}

export default SearchPage