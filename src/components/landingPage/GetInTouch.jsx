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
    fullName: "",
    email: "",
    phoneNumber: "",
    interest: "",
    message: "",
    workshop: "",
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
          fullName: "",
          email: "",
          phoneNumber: "",
          interest: "",
          message: "",
          workshop: "",
        });
      },
    });
  };

  return (
    <>
      <section className="g_main_container" id="get-in-touch">
        <div className="container flex justify-center items-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-full max-w-6xl">
            {/* Left Box (Form) */}
            <div className="g_in_box">
              <div className="g_f_h">Get in Touch</div>
              <div className="g_f_desc">
                Have questions about our programs? We’re here to <br className="hidden sm:block" />
                help you choose the right path for your career.
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-full"
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
                  <option value="">Registered for Workshop?</option>
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
                  <p className="text-green-600 mt-2 text-sm">
                    {enquiryMutation.data?.message}
                  </p>
                )}
                {enquiryMutation.isError && (
                  <p className="text-red-600 mt-2 text-sm">
                    {enquiryMutation.error?.response?.data?.error ||
                      "Something went wrong"}
                  </p>
                )}
              </form>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="g_f_secure">Privacy Protected</div>
                <div className="g_f_secure">Secure Communication</div>
              </div>
            </div>

            {/* Right Box (Contact Info) */}
            <div className="g_s_box">
              <div className="g_c_head">Contact Information</div>

              {[
                { icon: gc1, title: "Email", desc: "battula@integratego.com" },
                { icon: gc2, title: "Phone Number", desc: "+91 9705 558 559" },
                {
                  icon: gc3,
                  title: "Support Hours",
                  desc: "Mon - Sat: 9:00 AM - 10:00 PM\nSun: 10:00 AM - 6:00 PM",
                },
                { icon: gc4, title: "Office", desc: "KPHB, Hyderabad, 500085" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Image src={item.icon} alt={item.title} width={28} height={28} />
                  <div className="flex flex-col items-start gap-1">
                    <div className="g_c_e_h">{item.title}</div>
                    <div className="g_c_e_desc whitespace-pre-line">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}

              <div className="g_c_b_l"></div>
              <div className="flex items-center gap-3 ">
                <Link href="https://www.linkedin.com/in/integrate-go-45b842385/" className="g_c_f_s_in">
                  <Image src={gc5} alt="LinkedIn" width={20} height={20} />
                </Link>
                <Link href="https://www.youtube.com/@IntegrateGo" className="g_c_f_s_you">
                  <Image src={gc6} alt="YouTube" width={20} height={20} />
                </Link>
                <Link href="https://www.instagram.com/integrateg0/" className="g_c_f_s_ins">
                  <Image src={gc7} alt="Instagram" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer_main">
        <div className="container flex flex-col gap-4 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link href="/" className="f_l">Home</Link>
              <Link href="/about-us" className="f_l">About</Link>
              <Link href="/privacy-policy" className="f_l">Privacy</Link>
              <Link href="/terms-and-conditions" className="f_l">Terms</Link>
              <Link href="/no-refund-policy" className="f_l">No Refund Policy</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="https://www.linkedin.com/in/integrate-go-45b842385/">
                <Image src={footer1} alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com/integrateg0/">
                <Image src={footer2} alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://www.youtube.com/@IntegrateGo">
                <Image src={footer3} alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="g_c_b_l"></div>
          <div className="text-center text-sm">
            © 2025 IntegrateGo - All Rights Reserved
          </div>
        </div>
      </section>
    </>
  );
}
