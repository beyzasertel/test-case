import api from "./api";

export const getFeaturedJobs = () => {
  return api.get("/featuredJobs");
};
