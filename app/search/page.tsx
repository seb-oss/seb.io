"use client";
// app/posts/[slug]/Search.tsx
import { useState } from "react";
import Fuse from "fuse.js";
import { allDocuments } from "content";

export default function Search() {
  const [searchResults, setSearchResults] = useState(allDocuments);

  const handleSearch = (event: { target: { value: any } }) => {
    const { value } = event.target;
    if (value.length === 0) {
      setSearchResults(allDocuments);
      return;
    }

    const fuse = new Fuse(allDocuments, {
      keys: ["title", "version", "keywords", "status"],
    });

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setSearchResults(items);
  };

  return (
    <div className="home">
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <section>
        <h2>Search</h2>
        {searchResults.map((doc, index) => (
          <div key={index}>
            <p>{doc.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
