"use client";

import gc1 from "@/assests/gc1.svg";
import gc2 from "@/assests/gc2.svg";
import gc3 from "@/assests/gc3.svg";
import gc4 from "@/assests/gc4.svg";
import gc5 from "@/assests/gc5.svg";
import gc6 from "@/assests/gc6.svg";
import gc7 from "@/assests/gc7.svg";
import footer1 from "@/assests/footer1.svg";
import footer2 from "@/assests/footer2.svg";
import footer3 from "@/assests/footer3.svg";

import Image from "next/image";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/app/api/axiosInstance";

export default function GetInTouch() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interest: "",
    message: "",
  });

  const enquiryMutation = useMutation({
    mutationFn: async (payload) => {
      const res = await api.post(`api/users/enquiry`, payload);
      return res.data;
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enquiryMutation.mutate(form, {
      onSuccess: () => {
        setForm({ fullName: "", email: "", phoneNumber: "", interest: "", message: "" });
      },
    });
  };
  return (
    <>
      <section className="g_main_container">
        <div className="container flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 items-center justify-center">
            <div className="g_in_box">
              <div className="g_f_h">Get in Touch</div>
              <div className="g_f_desc">
                Have questions about our programs? We're here to <br /> help you
                choose the right path for your career.
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-full sm:w-[80%] lg:w-[70%]"
              >
                <input
                  className="form_input_text"
                  placeholder="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
                <input
                  className="form_input_text"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  className="form_input_text"
                  placeholder="Number"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
                <select
                  className="form_input_text"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                >
                  <option value="">Select interest Interest</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Fullstack Development</option>
                </select>
                <textarea
                  className="form_input_text"
                  placeholder="Message (Optional)"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="form_btn"
                  disabled={enquiryMutation.isPending}
                >
                  {enquiryMutation.isPending ? "Sending..." : "Send Enquiry"}
                </button>

                {/* Built-in React Query states */}
                {enquiryMutation.isSuccess && (
                  <p className="text-green-600 mt-2">
                    {enquiryMutation.data?.message}
                  </p>
                )}
                {enquiryMutation.isError && (
                  <p className="text-red-600 mt-2">
                    {enquiryMutation.error?.response?.data?.error ||
                      "Something went wrong"}
                  </p>
                )}
              </form>
              <div className="flex items-center gap-3">
                <div className="g_f_secure">Privacy Protected</div>
                <div className="g_f_secure">Secure Communication</div>
              </div>
            </div>
            <div className="g_s_box">
              <div className="g_c_head">Contact Information</div>
              <div className="flex items-start gap-2">
                <Image src={gc1} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">Email</div>
                  <div className="g_c_e_desc">info@integratego.com</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Image src={gc2} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">phoneNumber</div>
                  <div className="g_c_e_desc">+91 87654 32109</div>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <Image src={gc3} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">Support Hours</div>
                  <div className="g_c_e_desc">
                    Monday - Friday: 9:00 AM - 7:00 PM <br /> Saturday: 10:00 AM
                    - 4:00 PM
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Image src={gc4} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">Office</div>
                  <div className="g_c_e_desc">
                    Tech Hub, Electronic City Bangalore, Karnataka 560100
                  </div>
                </div>
              </div>
              <div className="g_c_b_l"></div>
              <div className="flex items-center gap-3">
                <div className="g_c_f_s_in">
                  <Image src={gc5} alt="LinkedIN" width="auto" height="auto" />
                </div>
                <div className="g_c_f_s_you">
                  <Image src={gc6} alt="Youtube" width="auto" height="auto" />
                </div>
                <div className="g_c_f_s_ins">
                  <Image src={gc7} alt="Instagram" width="auto" height="auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_main">
        <div className="container flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="f_l">Home</div>
              <div className="f_l">interests</div>
              <div className="f_l">About</div>
              <div className="f_l">Privacy</div>
              <div className="f_l">Terms</div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={footer1} alt="LinkedIn" width="auto" height="auto" />
              <Image src={footer2} alt="Instagram" width="auto" height="auto" />

              <Image src={footer3} alt="Youtube" width="auto" height="auto" />
            </div>
          </div>
          <div className="g_c_b_l"></div>
          <div className="flex items-center justify-center">
            © 2025 IntegrateGo - All Rights Reserved
          </div>
        </div>
      </section>
    </>
  );
}
