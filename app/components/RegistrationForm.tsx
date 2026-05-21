"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-3xl border border-dashed border-emerald-300 bg-white p-6 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
        Register interest
      </p>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeLF2yM-PJSJ3kTWFQvdYYvHzhNkgs2NOJg3N0Vj5ef0EZxVw/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)}
        className="mt-4 space-y-4 text-left"
      >
        <input
          name="entry.1806096104"
          type="text"
          placeholder="Full name"
          required
          className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
        />

        <input
          name="entry.1713689042"
          type="text"
          placeholder="Business name"
          required
          className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
        />

        <input
          name="entry.1315837314"
          type="email"
          placeholder="Email address"
          required
          className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
        />

        <div className="rounded-2xl border border-stone-300 p-4">
          <p className="mb-3 text-sm font-semibold text-emerald-800">
            Are you based in the Chessington Industrial Estate?
          </p>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="entry.1816711562"
              value="Yes"
              required
            />
            <span>Yes</span>
          </label>

          <label className="mt-2 flex items-center gap-2">
            <input
              type="radio"
              name="entry.1816711562"
              value="No"
            />
            <span>No</span>
          </label>
        </div>

        <div className="rounded-2xl border border-stone-300 p-4">
          <p className="mb-3 text-sm font-semibold text-emerald-800">
            What are your main interests?
          </p>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="entry.968516806"
              value="Collaboration with other businesses"
            />
            <span>Collaboration with other businesses</span>
          </label>

          <label className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="entry.968516806"
              value="Waste & materials"
            />
            <span>Waste & materials</span>
          </label>

          <label className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="entry.968516806"
              value="Sustainability / green skills"
            />
            <span>Sustainability / green skills</span>
          </label>

          <label className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="entry.968516806"
              value="Networking"
            />
            <span>Networking</span>
          </label>

          <label className="mt-3 block">
            <div className="mb-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="entry.968516806"
                value="__other_option__"
              />
              <span>Other</span>
            </div>

            <input
              type="text"
              name="entry.968516806.other_option_response"
              placeholder="Please specify"
              className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
            />
          </label>
        </div>

        <input type="hidden" name="entry.968516806_sentinel" value="" />
        <input type="hidden" name="entry.1816711562_sentinel" value="" />

        <button
          type="submit"
          className="w-full rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
        >
          Register interest
        </button>

        {submitted && (
          <p className="text-sm font-medium text-emerald-800">
            Thank you. Your registration has been submitted.
          </p>
        )}
      </form>

      <iframe name="hidden_iframe" style={{ display: "none" }} />
    </div>
  );
}