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
import Link from "next/link";

export default function GetInTouch() {
  const [form, setForm] = useState({
    fullName: null,
    email: null,
    phoneNumber: null,
    interest: null,
    message: null,
    workshop: null,
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
        setForm({
          fullName: null,
          email: null,
          phoneNumber: null,
          interest: null,
          message: null,
          workshop: null,
        });
      },
    });
  };
  return (
    <>
      <section className="g_main_container" id="get-in-touch">
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
                  required
                />

                <input
                  className="form_input_text"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form_input_text"
                  placeholder="Number"
                  name="phoneNumber"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                />

                <select
                  className="form_input_text"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Interest</option>
                  <option value="IBM Integration Bus (IIB) / IBM App Connect Enterprise (ACE)">
                    IBM Integration Bus (IIB) / IBM App Connect Enterprise (ACE)
                  </option>
                </select>

                <select
                  className="form_input_text"
                  name="workshop"
                  value={form.workshop}
                  onChange={handleChange}
                  required
                >
                  <option value="">Interested in Workshop?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
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
                  <div className="g_c_e_desc">battula@integratego.com</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Image src={gc2} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">PhoneNumber</div>
                  <div className="g_c_e_desc">+91 9705 558 559</div>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <Image src={gc3} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">Support Hours</div>
                  <div className="g_c_e_desc">
                    Monday - Sunday: 9:00 AM - 10:00 PM <br /> Sunday: 10:00 AM
                    - 6:00 PM
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Image src={gc4} alt="Email" widdth="auto" height="auto" />
                <div className="flex flex-col items-start gap-1">
                  <div className="g_c_e_h">Office</div>
                  <div className="g_c_e_desc">Kphb,Hyderabad,500085</div>
                </div>
              </div>
              <div className="g_c_b_l"></div>
              <div className="flex items-center gap-3">
                <div className="g_c_f_s_in">
                  <Link href="https://www.linkedin.com/in/integrate-go-45b842385/">
                    <Image
                      src={gc5}
                      alt="LinkedIN"
                      width="auto"
                      height="auto"
                    />
                  </Link>
                </div>
                <div className="g_c_f_s_you">
                  <Link href="https://www.youtube.com/@IntegrateGo">
                    <Image src={gc6} alt="Youtube" width="auto" height="auto" />
                  </Link>
                </div>
                <div className="g_c_f_s_ins">
                  <Link href="https://www.instagram.com/integrateg0/">
                    <Image
                      src={gc7}
                      alt="Instagram"
                      width="auto"
                      height="auto"
                    />
                  </Link>
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
              <Link href="/" style={{ textDecoration: "none" }}>
                <div className="f_l">Home</div>
              </Link>
              <Link href="/about-us" style={{ textDecoration: "none" }}>
                <div className="f_l">About</div>
              </Link>
              <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
                <div className="f_l">Privacy</div>
              </Link>
              <Link
                href="/terms-and-conditions"
                style={{ textDecoration: "none" }}
              >
                <div className="f_l">Terms</div>
              </Link>
              <Link href="/no-refund-policy" style={{ textDecoration: "none" }}>
                <div className="f_l">No Refund Policy</div>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://www.linkedin.com/in/integrate-go-45b842385/">
                <Image
                  src={footer1}
                  alt="LinkedIn"
                  width="auto"
                  height="auto"
                />
              </Link>
              <Link href="https://www.instagram.com/integrateg0/">
                <Image
                  src={footer2}
                  alt="Instagram"
                  width="auto"
                  height="auto"
                />
              </Link>
              <Link href="https://www.youtube.com/@IntegrateGo">
                <Image src={footer3} alt="Youtube" width="auto" height="auto" />
              </Link>
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
