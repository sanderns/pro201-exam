import {TextField} from "@mui/material";

export function SearchBar() {
    return (
        <div className="main">
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
        </div>
        </div>
    );
}