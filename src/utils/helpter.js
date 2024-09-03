import { challengesData } from "../constants/constant";

export const getDayWithSuffix = (day) => {
  const suffix = ["th", "st", "nd", "rd"];
  const value = day % 10;
  return `${day}${
    suffix[day % 100 >= 11 && day % 100 <= 13 ? 0 : value < 4 ? value : 0]
  }`;
};

export const formatDateTime = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString("default", { month: "short" });
  const year = dateObject.getFullYear().toString().slice(-2);
  const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
  const time = dateObject
    .toLocaleTimeString("en-US", optionsTime)
    .replace(":00", "");

  return `${getDayWithSuffix(day)} ${month} '${year} ${time}`;
};

export const getStatusColor = (status) => {
  if (status === "Active") return "#d2e5d4";
  else if (status === "Upcoming") return "#fcf1d2";
  else return "#ffded4";
};

export const getStatusTextColor = (status) => {
  if (status === "Active") return "#44924C";
  else if (status === "Upcoming") return "#666666";
  else return "#666666";
};

export const getChallengeById = (id) => {
  return challengesData.find((challenge) => challenge.id === id);
};

const formatTimeAndDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  };
  return date.toLocaleString("en-US", options);
};

export const getStatusMessage = (status, startDate, endDate) => {
  const formattedStartDate = formatTimeAndDate(startDate);
  const formattedEndDate = formatDateTime(endDate);

  switch (status) {
    case "Upcoming":
      return `Starts on ${formattedStartDate}`;
    case "Active":
      return `Ends on ${formattedEndDate}`;
    case "Past":
      return `Ended on ${formattedEndDate}`;
    default:
      return "";
  }
};
