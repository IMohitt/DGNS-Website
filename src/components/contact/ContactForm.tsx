import { MessageCircle, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import {
  buildConsultationMessage,
  contactServiceOptions,
  getServiceFromQuery,
  preferredEmirateOptions,
  type ContactFormValues,
} from "../../data/contact";
import { openWhatsApp } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

const inputClasses =
  "min-h-12 w-full rounded-xl border border-deep-green/14 bg-white px-4 py-3 text-base text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/55 focus:border-emerald focus:ring-4 focus:ring-soft-green/15 aria-[invalid=true]:border-red-700/65 aria-[invalid=true]:focus:ring-red-700/10";

const defaultValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  service: "",
  preferredEmirate: "",
  message: "",
};

type ValidationMessageProps = {
  error?: FieldError;
  id: string;
};

function ValidationMessage({ error, id }: ValidationMessageProps) {
  if (!error) return null;

  return (
    <p id={id} role="alert" className="mt-2 text-sm font-medium text-red-800">
      {error.message}
    </p>
  );
}

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [isOpening, setIsOpening] = useState(false);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(null);
  const openingTimerRef = useRef<number | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { dirtyFields, errors },
  } = useForm<ContactFormValues>({ defaultValues, mode: "onBlur" });

  const queryService = getServiceFromQuery(searchParams.get("service"));

  useEffect(() => {
    if (queryService && !dirtyFields.service) {
      setValue("service", queryService, {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: false,
      });
    }
  }, [dirtyFields.service, queryService, setValue]);

  useEffect(
    () => () => {
      if (openingTimerRef.current !== null) {
        window.clearTimeout(openingTimerRef.current);
      }
    },
    [],
  );

  const onSubmit = (values: ContactFormValues) => {
    const pageUrl = window.location.href;
    const message = buildConsultationMessage(values, pageUrl);

    setFallbackMessage(null);
    setIsOpening(true);
    const openedWindow = openWhatsApp(message);

    if (!openedWindow) {
      setFallbackMessage(message);
    }

    if (openingTimerRef.current !== null) {
      window.clearTimeout(openingTimerRef.current);
    }

    openingTimerRef.current = window.setTimeout(() => {
      setIsOpening(false);
      openingTimerRef.current = null;
    }, 1400);
  };

  return (
    <div className="rounded-[2rem] border border-deep-green/10 bg-white p-5 shadow-[0_28px_80px_-48px_rgba(5,35,29,0.55)] sm:p-8 lg:p-10">
      <p className="type-label text-emerald">WhatsApp Consultation</p>
      <h2
        id="contact-form-title"
        className="mt-4 text-[clamp(2rem,3.8vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-deep-green text-balance"
      >
        Tell Us About Your Requirements
      </h2>
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-deep-green/10 bg-[#EEF3EC] p-4 sm:p-5">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-deep-green text-brand-lime">
          <ShieldCheck aria-hidden="true" className="size-4" />
        </span>
        <p className="pt-0.5 text-sm leading-7 text-deep-green/72">
          Continue on WhatsApp opens a prefilled message with these details.
          Review it and tap Send in WhatsApp; nothing is sent automatically.
        </p>
      </div>

      <form
        className="mt-8"
        noValidate
        aria-busy={isOpening}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-first-name"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              First Name <span aria-hidden="true" className="text-emerald">*</span>
              <span className="sr-only"> required</span>
            </label>
            <input
              id="contact-first-name"
              type="text"
              autoComplete="given-name"
              required
              maxLength={80}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? "first-name-error" : undefined}
              className={inputClasses}
              {...register("firstName", {
                required: "Enter your first name.",
                validate: (value) =>
                  value.trim().length > 0 || "Enter your first name.",
              })}
            />
            <ValidationMessage
              id="first-name-error"
              error={errors.firstName}
            />
          </div>

          <div>
            <label
              htmlFor="contact-last-name"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Last Name <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="contact-last-name"
              type="text"
              autoComplete="family-name"
              maxLength={80}
              className={inputClasses}
              {...register("lastName")}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Email <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={160}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClasses}
              {...register("email", {
                validate: (value) => {
                  const email = value.trim();

                  return (
                    !email ||
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
                    "Enter a valid email address or leave this field blank."
                  );
                },
              })}
            />
            <ValidationMessage id="email-error" error={errors.email} />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Phone <span aria-hidden="true" className="text-emerald">*</span>
              <span className="sr-only"> required</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              maxLength={30}
              placeholder="+971 50 123 4567"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={cn(
                "phone-hint",
                errors.phone && "phone-error",
              )}
              className={inputClasses}
              {...register("phone", {
                required: "Enter a phone number.",
                validate: (value) => {
                  const normalized = value.trim().replace(/[\s().-]/g, "");
                  return (
                    /^\+?\d{7,18}$/.test(normalized) ||
                    "Enter a valid UAE or international phone number."
                  );
                },
              })}
            />
            <p id="phone-hint" className="mt-2 text-xs leading-5 text-muted">
              UAE and international formats are accepted.
            </p>
            <ValidationMessage id="phone-error" error={errors.phone} />
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Company Name <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              maxLength={120}
              className={inputClasses}
              {...register("companyName")}
            />
          </div>

          <div>
            <label
              htmlFor="contact-service"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Service Required <span aria-hidden="true" className="text-emerald">*</span>
              <span className="sr-only"> required</span>
            </label>
            <select
              id="contact-service"
              required
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              className={inputClasses}
              {...register("service", {
                required: "Select the service you would like to discuss.",
              })}
            >
              <option value="">Select a service</option>
              {contactServiceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ValidationMessage id="service-error" error={errors.service} />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-emirate"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Preferred Emirate <span className="font-normal text-muted">(optional)</span>
            </label>
            <select
              id="contact-emirate"
              className={inputClasses}
              {...register("preferredEmirate")}
            >
              <option value="">Select if relevant</option>
              {preferredEmirateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Message <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id="contact-message"
              rows={6}
              maxLength={1200}
              placeholder="Tell us briefly about your business or current requirement."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : "message-hint"}
              className={`${inputClasses} min-h-36 resize-y`}
              {...register("message", {
                maxLength: {
                  value: 1200,
                  message: "Keep your message within 1,200 characters.",
                },
              })}
            />
            <p id="message-hint" className="mt-2 text-xs leading-5 text-muted">
              Do not include passwords, bank details or other sensitive information.
            </p>
            <ValidationMessage id="message-error" error={errors.message} />
          </div>
        </div>

        <button
          type="submit"
          disabled={isOpening}
          className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-deep-green px-7 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(11,53,45,0.16)] transition-[background-color,transform,opacity] hover:bg-emerald active:translate-y-px disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          <span aria-live="polite">
            {isOpening ? "Opening WhatsApp…" : "Continue on WhatsApp"}
          </span>
        </button>

        {fallbackMessage ? (
          <div
            role="status"
            className="mt-6 rounded-2xl border border-amber-700/20 bg-amber-50 p-5"
          >
            <p className="text-sm font-semibold text-deep-green">
              Unable to open WhatsApp automatically. You can contact us directly
              using the WhatsApp button below.
            </p>
            <WhatsAppCTA
              label="Open WhatsApp Manually"
              message={fallbackMessage}
              variant="dark"
              className="mt-4 w-full sm:w-auto"
            />
          </div>
        ) : null}
      </form>
    </div>
  );
}
