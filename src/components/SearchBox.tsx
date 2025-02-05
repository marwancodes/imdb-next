"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between px-5 max-w-6xl mx-auto">
        <input type="text" 
            placeholder="Search keywords" 
            className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
            value={search}
            onChange={handleChange}
            />
        <button className="text-amber-600 disabled:text-gray-400" disabled={!search}>Search</button>
    </form>
  )
}

export default SearchBox;