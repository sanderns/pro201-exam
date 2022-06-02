import { TextField } from "@mui/material";

export function SearchBar({ onChange }) {
  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}
