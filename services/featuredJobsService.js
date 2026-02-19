import api from "./api";

export const getFeaturedJobs = () => {
  return api.get("/featuredJobs");
};

export const getJobSolutions = () => {
  return api.get("/jobSolutions");
};
