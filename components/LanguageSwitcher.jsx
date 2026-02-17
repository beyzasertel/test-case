import { useRouter } from "next/router";
import { Select, MenuItem } from "@mui/material";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  const handleChange = (event) => {
    const newLocale = event.target.value;

    router.push(asPath, asPath, {
      locale: newLocale,
    });
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      sx={{
        color: "white",
        fontSize: "14px",
        fontWeight: 500,

        "&:before": {
          borderBottom: "none",
        },
        "&:after": {
          borderBottom: "none",
        },

        "& .MuiSvgIcon-root": {
          color: "white",
          fontSize: "20px",
        },

        "& .MuiSelect-select": {
          paddingRight: "24px !important",
        },
      }}
    >
      <MenuItem value="tr">Türkçe</MenuItem>
      <MenuItem value="en">English</MenuItem>
    </Select>
  );
}
