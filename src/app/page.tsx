import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

type HomeProps = {
  searchParams: Promise<{ genre?: string }>;
};

const Home = async ({ searchParams }: HomeProps) => {

  const { genre } = await searchParams;
  const selectGenre = genre || 'fetchTrending';

  const URL_API = `https://api.themoviedb.org/3${
      selectGenre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`


  const res = await fetch(URL_API,{ cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  };

  const data = await res.json();
  const results = data.results;

  return (
    <div className='text-center'>
      <Results results={results} />
    </div>
  );
}

export default Home;