import React from "react";
import TextField from "@mui/material/TextField";

export default function SearchBox({ search, setSearch }) {
  return (
    <TextField
      id="user-list-search-bar"
      placeholder="Search"
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      variant="outlined"
      fullWidth
    />
  );
}
