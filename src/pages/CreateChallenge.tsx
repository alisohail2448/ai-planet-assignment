import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateChallenge = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [level, setLevel] = useState("Easy");

  return (
    <div style={{ background: "#F8F9FD", paddingBottom: 100 }}>
      <div style={{ maxWidth: "1500px", margin: "0 auto", padding: "50px 0" }}>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>Challenge Details</p>
      </div>
      <div style={{ background: "#fff", paddingTop: 10 }}>
        <Box
          sx={{
            maxWidth: "1500px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "flex-start",
          }}
        >
          <TextField
            margin="normal"
            variant="outlined"
            sx={{ width: "600px" }}
          />
          <DatePicker
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            sx={{ width: "600px" }}
          />
          <DatePicker
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            sx={{ width: "600px" }}
          />

          <TextField
            margin="normal"
            variant="outlined"
            multiline
            rows={8}
            sx={{ width: "900px" }}
          />

          <Box>
            <Typography variant="body1" gutterBottom>
              Image
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <input type="file" hidden />
            </Button>
          </Box>
          <TextField
            select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            margin="normal"
            variant="outlined"
            sx={{ width: "300px" }}
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </TextField>
          <button
            onClick={() => navigate(`/${id}`)}
            style={{
              backgroundColor: "#44924C",
              padding: "10px 20px",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#218838")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#28a745")
            }
          >
            <p style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>
              Create Challenge
            </p>
          </button>
        </Box>
      </div>
    </div>
  );
};

export default CreateChallenge;
