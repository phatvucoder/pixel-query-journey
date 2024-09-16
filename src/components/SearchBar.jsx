import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Image, Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.search.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full max-w-2xl">
      <div className="relative flex-grow">
        <Input
          type="text"
          name="search"
          placeholder="Enter your search query..."
          className="pr-20"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
          <Button type="button" variant="ghost" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
          <Button type="button" variant="ghost" size="icon">
            <Image className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button type="submit">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;