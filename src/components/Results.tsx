
type Result = {
    id: number;
    original_title: string;

}
type ResultsProps = {
    results: Result[]; // Adjust the type according to the actual structure of your results
  };

const Results = ({ results }: ResultsProps) => {
  return (
    <div className='grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {results.map((result) => (
            <div key={result.id}>
                <h2>{result.original_title}</h2>
            </div>
            
        ))}
    </div>
  )
}

export default Results;
