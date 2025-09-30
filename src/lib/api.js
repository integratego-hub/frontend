import api from "./axios";

// Fetch all courses
export async function getCourses() {
  const res = await api.get("/");
  return res.data;
}