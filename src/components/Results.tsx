import Card from "./Card";

export type Result = {
    id: number;
    title: string;
    name: string;
    original_title: string;
    release_date: string;
    first_air_date: string;
    vote_count: number;
    backdrop_path: string;
    poster_path: string;
    overview: string;
};

type ResultsProps = {
    results: Result[]; // Adjust the type according to the actual structure of your results
  };

const Results = ({ results }: ResultsProps) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl py-4 mx-auto'>
        {results.map((result) => (
            <Card key={result.id} result={result}/>
        ))}
    </div>
  )
}

export default Results;
