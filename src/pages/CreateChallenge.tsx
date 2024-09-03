import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../components/CustomTextInput";
import { DatePicker } from "@mui/x-date-pickers";
import { getChallengeById } from "../utils/helper";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { ArrowForward } from "@mui/icons-material";
import imageIcon from "../assets/icons/image.svg";
import toast from "react-hot-toast";

const styles = {
  container: {
    background: "#F8F9FD",
    paddingBottom: 100,
  },
  innerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 0",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
  },
  formContainer: {
    background: "#fff",
  },
  formBox: {
    maxWidth: "1200px",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    alignItems: "flex-start",
    paddingTop: 4,
  },
  dateLabel: {
    fontSize: "16px",
    color: "#333333",
    fontWeight: 500,
    marginBottom: "8px",
  },
  imageButton: {
    border: "none",
    color: "#44924C",
    textTransform: "capitalize",
    padding: "6px 24px",
    background: "transparent",
  },
  changeImageButton: {
    border: "1px solid #D9D9D9",
    color: "#666666",
    textTransform: "capitalize",
    padding: "6px 24px",
    background: "#F4F4F4",
  },
  submitButton: {
    backgroundColor: "#44924C",
    padding: "10px 20px",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  submitButtonText: {
    color: "white",
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "capitalize",
  },
};

const validationSchema = Yup.object({
  challengeName: Yup.string().required("Challenge Name is required"),
  startDate: Yup.date().nullable().required("Start Date is required"),
  endDate: Yup.date()
    .nullable()
    .required("End Date is required")
    .min(Yup.ref("startDate"), "End Date cannot be before Start Date"),
  description: Yup.string().required("Description is required"),
  level: Yup.string().required("Level is required"),
});

const CreateChallenge = () => {
  const [challenge, setChallenge] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const data = getChallengeById(Number(id));
      if (data) {
        setChallenge({
          ...data,
          startDate: dayjs(data.startDate),
          endDate: dayjs(data.endDate),
        });
      }
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      challengeName: challenge?.title || "",
      startDate: challenge?.startDate || null,
      endDate: challenge?.endDate || null,
      description: challenge?.description || "",
      level: challenge?.level || "Easy",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        startDate: values.startDate ? values.startDate.toISOString() : null,
        endDate: values.endDate ? values.endDate.toISOString() : null,
      };
      if (id) {
        toast.success("Challenge Saved Successfully!");
        navigate("/");
      } else {
        toast.success("Challenge Created Successfully!");
        navigate("/");
      }
    },
    enableReinitialize: true,
  });

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <p style={styles.title}>Challenge Details</p>
      </div>
      <div style={styles.formContainer}>
        <Box
          sx={styles.formBox}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <CustomTextInput
            label="Challenge Name"
            name="challengeName"
            value={formik.values.challengeName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.challengeName &&
              Boolean(formik.errors.challengeName)
            }
            helperText={
              formik.touched.challengeName && formik.errors.challengeName
            }
          />

          <div>
            <p style={styles.dateLabel}>Start Date</p>
            <DatePicker
              value={formik.values.startDate}
              onChange={(newValue) =>
                formik.setFieldValue("startDate", newValue)
              }
              onBlur={formik.handleBlur}
              slotProps={{ textField: { size: "small" } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={
                    formik.touched.startDate && Boolean(formik.errors.startDate)
                  }
                  helperText={
                    formik.touched.startDate && formik.errors.startDate
                  }
                  fullWidth
                />
              )}
            />
          </div>

          <div>
            <p style={styles.dateLabel}>End Date</p>
            <DatePicker
              value={formik.values.endDate}
              onChange={(newValue) => formik.setFieldValue("endDate", newValue)}
              onBlur={formik.handleBlur}
              slotProps={{ textField: { size: "small" } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={
                    formik.touched.endDate && Boolean(formik.errors.endDate)
                  }
                  helperText={formik.touched.endDate && formik.errors.endDate}
                  fullWidth
                />
              )}
            />
          </div>

          <CustomTextInput
            label="Description"
            name="description"
            multiline
            rows={8}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={
              formik.touched.description && formik.errors.description
            }
          />

          {challenge?.imageUrl ? (
            <Box>
              <div>
                <Typography variant="body1" gutterBottom>
                  Image
                </Typography>
                <img
                  src={challenge?.imageUrl}
                  style={{
                    width: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Button
                variant="outlined"
                component="label"
                style={styles.imageButton}
                startIcon={<img src={imageIcon} alt="image" width={16} />}
                endIcon={<ArrowForward />}
              >
                Change Image
                <input type="file" hidden />
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography variant="body1" gutterBottom>
                Image
              </Typography>
              <Button
                variant="outlined"
                component="label"
                style={styles.changeImageButton}
                endIcon={<CloudUploadIcon />}
              >
                Upload
                <input type="file" hidden />
              </Button>
            </Box>
          )}

          <TextField
            select
            name="level"
            value={formik.values.level}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            margin="normal"
            variant="outlined"
            sx={{ width: "300px" }}
            size="small"
            error={formik.touched.level && Boolean(formik.errors.level)}
            helperText={formik.touched.level && formik.errors.level}
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </TextField>

          <Button
            type="submit"
            style={styles.submitButton}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#218838")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#28a745")
            }
          >
            <p style={styles.submitButtonText}>
              {id ? "Save Changes" : "Create Challenge"}
            </p>
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default CreateChallenge;
