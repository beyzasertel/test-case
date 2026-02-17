import { useState } from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({
  placeholder = "İş ara | İş, Şirket, Anahtar Kelime",
  onSearch,
  fullWidth = true,
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value.trim());
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        fullWidth={fullWidth}
        size="medium"
        variant="outlined"
        sx={{
          bgcolor: "white",
          borderRadius: "999px",

          /* Border'ı kapat */
          "& fieldset": {
            border: "none",
          },

          /* Hover border kapat */
          "&:hover fieldset": {
            border: "none",
          },

          /* Focus border kapat */
          "&.Mui-focused fieldset": {
            border: "none",
          },

          /* İç padding'i güzelleştir */
          "& .MuiOutlinedInput-root": {
            borderRadius: "999px",
            paddingRight: "12px",
            width: "350px",
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
