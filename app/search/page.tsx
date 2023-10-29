"use client";
import React, { useState } from "react";
import Fuse from "fuse.js";
// import friends from "./freinds.json"

export default function Search() {
  const friends = [
    { name: "John Doe", age: 25, email: "johndoe@example.com" },
    { name: "Janethkate Doe", age: 30, email: "janedoe@example.com" },
    { name: "Bob Smith", age: 35, email: "bobsmith@example.com" },
  ];

  const [search, setSearch] = useState(friends);

  const [input, setInput] = useState<any>(friends);

  const handleSearch = (event: any) => {
    const { value } = event.target;
    if (value.length === 0) {
      setInput(friends);
      return;
    }

    const fuse = new Fuse(friends, {
      keys: ["name", "email", "age"],
    });

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setInput(items);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Messenger"
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {input?.map((person: any, index: any) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
