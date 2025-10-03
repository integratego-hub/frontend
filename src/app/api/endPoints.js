import api from "./axiosInstance";

// post enquiries
export const Enquiry = {
    saveEnquiry :(data) => api.post(`api/api/users/enquiry`)
}