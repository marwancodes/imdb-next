import Results from "@/components/Results";
import axios from "axios";

const API_KEY = process.env.API_KEY;

type HomeProps = {
  searchParams: {
    genre?: string;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const genre = (await searchParams).genre || "fetchTrending";

  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }`,
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1,
        },
      }
    );

    const results = data.results;
    // console.log(results);

    return (<div className="text-center">
        <Results results={results}/>
      </div>)
  
  } catch (err) {
    console.error("Failed to fetch data:", err);
    throw new Error("Failed to fetch data");
  }

  
};

export default Home;
