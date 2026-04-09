"use client";

import { useRef, useState } from "react";
import { FORM_CONFIG, INTEREST_OPTIONS } from "../config/form";

type FormStatus = "idle" | "submitting" | "success";

type FormErrors = {
  fullName?: string;
  businessName?: string;
  email?: string;
  basedOnEstate?: string;
};

const inputClass =
  "w-full rounded-2xl border px-4 py-3 outline-none focus:border-emerald-700 transition";

function validate(form: HTMLFormElement): FormErrors {
  const data = new FormData(form);
  const errors: FormErrors = {};

  if (!data.get(FORM_CONFIG.fields.fullName)?.toString().trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.get(FORM_CONFIG.fields.businessName)?.toString().trim()) {
    errors.businessName = "Business name is required.";
  }

  const email = data.get(FORM_CONFIG.fields.email)?.toString().trim() ?? "";
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.get(FORM_CONFIG.fields.basedOnEstate)) {
    errors.basedOnEstate = "Please select an option.";
  }

  return errors;
}

export default function RegistrationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  // Ref used to avoid stale closure inside iframe onLoad
  const isSubmitting = useRef(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const errs = validate(e.currentTarget);
    if (Object.keys(errs).length > 0) {
      e.preventDefault();
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    isSubmitting.current = true;
  }

  function handleIframeLoad() {
    if (isSubmitting.current) {
      isSubmitting.current = false;
      setStatus("success");
      formRef.current?.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-dashed border-emerald-300 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
          Register interest
        </p>
        <div className="mt-6 space-y-2">
          <p className="text-3xl text-emerald-700">✓</p>
          <p className="font-semibold text-emerald-800">You&apos;re registered!</p>
          <p className="text-sm leading-6 text-slate-600">
            Thank you. We&apos;ll be in touch with details closer to the event.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-emerald-700 underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-dashed border-emerald-300 bg-white p-6 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
        Register interest
      </p>

      <form
        ref={formRef}
        action={FORM_CONFIG.action}
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        noValidate
        className="mt-4 space-y-4 text-left"
      >
        <div>
          <label htmlFor="reg-full-name" className="sr-only">
            Full name
          </label>
          <input
            id="reg-full-name"
            name={FORM_CONFIG.fields.fullName}
            type="text"
            placeholder="Full name"
            autoComplete="name"
            className={`${inputClass} ${errors.fullName ? "border-red-400" : "border-stone-300"}`}
          />
          {errors.fullName && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="reg-business-name" className="sr-only">
            Business name
          </label>
          <input
            id="reg-business-name"
            name={FORM_CONFIG.fields.businessName}
            type="text"
            placeholder="Business name"
            autoComplete="organization"
            className={`${inputClass} ${errors.businessName ? "border-red-400" : "border-stone-300"}`}
          />
          {errors.businessName && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.businessName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="reg-email" className="sr-only">
            Email address
          </label>
          <input
            id="reg-email"
            name={FORM_CONFIG.fields.email}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className={`${inputClass} ${errors.email ? "border-red-400" : "border-stone-300"}`}
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <fieldset className="rounded-2xl border border-stone-300 p-4">
          <legend className="mb-3 text-sm font-semibold text-emerald-800">
            Are you based in the Chessington Industrial Estate?
          </legend>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={FORM_CONFIG.fields.basedOnEstate}
              value="Yes"
            />
            <span>Yes</span>
          </label>

          <label className="mt-2 flex items-center gap-2">
            <input
              type="radio"
              name={FORM_CONFIG.fields.basedOnEstate}
              value="No"
            />
            <span>No</span>
          </label>

          {errors.basedOnEstate && (
            <p role="alert" className="mt-2 text-xs text-red-600">
              {errors.basedOnEstate}
            </p>
          )}
        </fieldset>

        <fieldset className="rounded-2xl border border-stone-300 p-4">
          <legend className="mb-3 text-sm font-semibold text-emerald-800">
            What are your main interests?
          </legend>

          {INTEREST_OPTIONS.map((interest) => (
            <label key={interest} className="mt-2 flex items-center gap-2 first:mt-0">
              <input
                type="checkbox"
                name={FORM_CONFIG.fields.interests}
                value={interest}
              />
              <span>{interest}</span>
            </label>
          ))}

          <label className="mt-3 block">
            <div className="mb-2 flex items-center gap-2">
              <input
                type="checkbox"
                name={FORM_CONFIG.fields.interests}
                value="__other_option__"
              />
              <span>Other</span>
            </div>
            <input
              type="text"
              name={`${FORM_CONFIG.fields.interests}.other_option_response`}
              placeholder="Please specify"
              className={`${inputClass} border-stone-300`}
            />
          </label>
        </fieldset>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Register interest"}
        </button>
      </form>

      <iframe
        name="hidden_iframe"
        title="Form submission target"
        onLoad={handleIframeLoad}
        aria-hidden="true"
        style={{ display: "none" }}
      />
    </div>
  );
}
