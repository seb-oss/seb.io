"use client";
// app/posts/[slug]/Search.tsx
import { useState } from "react";
import Fuse from "fuse.js";
import { allComponents } from "content";

export default function Search() {
  const [searchResults, setSearchResults] = useState(allComponents);

  const handleSearch = (event: { target: { value: any } }) => {
    const { value } = event.target;
    if (value.length === 0) {
      setSearchResults(allComponents);
      return;
    }

    const fuse = new Fuse(allComponents, {
      keys: ["title", "version", "keywords", "status"],
    });

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setSearchResults(items);
  };

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Version</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((component, index) => (
            <tr key={index}>
              <td>{component.title}</td>
              <td>{component.version}</td>
              <td>{component.keywords}</td>
              <td>{component.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
