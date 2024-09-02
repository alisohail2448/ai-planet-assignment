import React from "react";
import { TextField } from "@mui/material";

const styles = {
  label: {
    fontSize: "16px",
    color: "#333333",
    fontWeight: 500,
    marginBottom: "-4px",
  },
  textField: {
    width: "600px",
  },
};

const CustomTextInput = ({ label, labelStyle, inputStyle, ...props }) => {
  return (
    <div>
      <p style={{ ...styles.label, ...labelStyle }}>{label}</p>
      <TextField
        margin="normal"
        variant="outlined"
        sx={{ ...styles.textField, ...inputStyle }}
        size="small"
        {...props}
      />
    </div>
  );
};

export default CustomTextInput;
