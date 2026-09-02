import { MessageCircle, ShieldCheck } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";

import {
  buildTravelPlannerMessage,
  travelDestinationOptions,
  travelExperienceTypeOptions,
  type TravelPlannerValues,
} from "../../data/travel";
import { cn } from "../../utils/cn";
import { openWhatsApp } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

type PlannerFormValues = TravelPlannerValues & {
  planningFocus: string;
};

export type TravelPlannerProps = {
  title?: string;
  description?: string;
  className?: string;
};

const defaultValues: PlannerFormValues = {
  name: "",
  travelDate: "",
  travelers: "",
  destination: "",
  experienceType: "",
  message: "",
  planningFocus: "",
};

const inputClasses =
  "min-h-12 w-full rounded-xl border border-deep-green/14 bg-white px-4 py-3 text-base text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/55 focus:border-emerald focus:ring-4 focus:ring-soft-green/15 aria-[invalid=true]:border-red-700/65 aria-[invalid=true]:focus:ring-red-700/10";

const getLocalToday = () => {
  const today = new Date();
  const pad = (value: number) => String(value).padStart(2, "0");

  return `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
};

type ValidationMessageProps = {
  id: string;
  message?: string;
};

function ValidationMessage({ id, message }: ValidationMessageProps) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-2 text-sm font-medium text-red-800">
      {message}
    </p>
  );
}

export function TravelPlanner({
  title = "Plan Your UAE Experience",
  description = "Share a few details and continue the conversation with DGNS directly on WhatsApp.",
  className,
}: TravelPlannerProps) {
  const reactId = useId().replaceAll(":", "");
  const titleId = `travel-planner-${reactId}-title`;
  const focusHintId = `travel-planner-${reactId}-focus-hint`;
  const focusErrorId = `travel-planner-${reactId}-focus-error`;
  const [isOpening, setIsOpening] = useState(false);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(null);
  const openingTimerRef = useRef<number | null>(null);
  const minimumDate = getLocalToday();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm<PlannerFormValues>({
    defaultValues,
    mode: "onBlur",
    shouldFocusError: false,
  });

  const selectedDestination = watch("destination");
  const selectedExperienceType = watch("experienceType");

  useEffect(() => {
    if (selectedDestination || selectedExperienceType) {
      clearErrors("planningFocus");
    }
  }, [clearErrors, selectedDestination, selectedExperienceType]);

  useEffect(
    () => () => {
      if (openingTimerRef.current !== null) {
        window.clearTimeout(openingTimerRef.current);
      }
    },
    [],
  );

  const onSubmit = (values: PlannerFormValues) => {
    const message = buildTravelPlannerMessage(values);

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

  const onInvalid = (formErrors: FieldErrors<PlannerFormValues>) => {
    if (formErrors.name) {
      setFocus("name");
    } else if (formErrors.travelDate) {
      setFocus("travelDate");
    } else if (formErrors.travelers) {
      setFocus("travelers");
    } else if (formErrors.planningFocus) {
      setFocus("destination");
    } else if (formErrors.message) {
      setFocus("message");
    }
  };

  return (
    <div
      aria-labelledby={titleId}
      className={cn(
        "rounded-[2rem] border border-[#DCCFB9] bg-[#F3EBDD] p-5 shadow-[0_30px_80px_-48px_rgba(5,35,29,0.55)] sm:p-8 lg:p-10",
        className,
      )}
    >
      <p className="type-label text-emerald">WhatsApp Travel Planner</p>
      <h2
        id={titleId}
        className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-deep-green text-balance"
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-deep-green/72 sm:text-lg sm:leading-8">
        {description}
      </p>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-deep-green/10 bg-white/64 p-4 sm:p-5">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-deep-green text-brand-lime">
          <ShieldCheck aria-hidden="true" className="size-4" />
        </span>
        <p className="pt-0.5 text-sm leading-7 text-muted">
          WhatsApp will open with a prefilled message. Review the details and tap
          Send in WhatsApp to share your enquiry with DGNS.
        </p>
      </div>

      <form
        className="mt-8"
        noValidate
        aria-busy={isOpening}
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`travel-planner-${reactId}-name`}
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Name <span aria-hidden="true" className="text-emerald">*</span>
              <span className="sr-only"> required</span>
            </label>
            <input
              id={`travel-planner-${reactId}-name`}
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? `travel-planner-${reactId}-name-error` : undefined
              }
              className={inputClasses}
              {...register("name", {
                required: "Enter your name.",
                validate: (value) =>
                  value.trim().length > 0 || "Enter your name.",
              })}
            />
            <ValidationMessage
              id={`travel-planner-${reactId}-name-error`}
              message={errors.name?.message}
            />
          </div>

          <div>
            <label
              htmlFor={`travel-planner-${reactId}-date`}
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Travel Date <span className="font-normal text-deep-green/72">(optional)</span>
            </label>
            <input
              id={`travel-planner-${reactId}-date`}
              type="date"
              min={minimumDate}
              aria-invalid={Boolean(errors.travelDate)}
              aria-describedby={
                errors.travelDate
                  ? `travel-planner-${reactId}-date-error`
                  : undefined
              }
              className={inputClasses}
              {...register("travelDate", {
                validate: (value) =>
                  !value || value >= minimumDate || "Choose today or a future date.",
              })}
            />
            <ValidationMessage
              id={`travel-planner-${reactId}-date-error`}
              message={errors.travelDate?.message}
            />
          </div>

          <div>
            <label
              htmlFor={`travel-planner-${reactId}-travelers`}
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Number of Travelers{" "}
              <span className="font-normal text-deep-green/72">(optional)</span>
            </label>
            <input
              id={`travel-planner-${reactId}-travelers`}
              type="number"
              inputMode="numeric"
              min={1}
              step={1}
              placeholder="2"
              aria-invalid={Boolean(errors.travelers)}
              aria-describedby={
                errors.travelers
                  ? `travel-planner-${reactId}-travelers-error`
                  : undefined
              }
              className={inputClasses}
              {...register("travelers", {
                validate: (value) =>
                  !value.trim() ||
                  /^[1-9]\d*$/.test(value.trim()) ||
                  "Enter a whole number greater than zero.",
              })}
            />
            <ValidationMessage
              id={`travel-planner-${reactId}-travelers-error`}
              message={errors.travelers?.message}
            />
          </div>

          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-semibold text-deep-green">
              Planning Focus{" "}
              <span aria-hidden="true" className="text-emerald">*</span>
              <span className="sr-only"> required</span>
            </legend>
            <p
              id={focusHintId}
              className="mt-1 text-xs leading-5 text-deep-green/72"
            >
              Choose at least a destination or an experience type. You may select
              both.
            </p>
            <input
              type="hidden"
              {...register("planningFocus", {
                validate: () =>
                  Boolean(
                    getValues("destination") || getValues("experienceType"),
                  ) || "Select a destination or an experience type.",
              })}
            />
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={`travel-planner-${reactId}-destination`}
                  className="mb-2 block text-sm font-semibold text-deep-green"
                >
                  Destination
                </label>
                <select
                  id={`travel-planner-${reactId}-destination`}
                  aria-invalid={Boolean(errors.planningFocus)}
                  aria-describedby={cn(
                    focusHintId,
                    errors.planningFocus && focusErrorId,
                  )}
                  className={inputClasses}
                  {...register("destination")}
                >
                  <option value="">Not sure yet</option>
                  {travelDestinationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor={`travel-planner-${reactId}-experience`}
                  className="mb-2 block text-sm font-semibold text-deep-green"
                >
                  Experience Type
                </label>
                <select
                  id={`travel-planner-${reactId}-experience`}
                  aria-invalid={Boolean(errors.planningFocus)}
                  aria-describedby={cn(
                    focusHintId,
                    errors.planningFocus && focusErrorId,
                  )}
                  className={inputClasses}
                  {...register("experienceType")}
                >
                  <option value="">Not sure yet</option>
                  {travelExperienceTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <ValidationMessage
              id={focusErrorId}
              message={errors.planningFocus?.message}
            />
          </fieldset>

          <div className="sm:col-span-2">
            <label
              htmlFor={`travel-planner-${reactId}-message`}
              className="mb-2 block text-sm font-semibold text-deep-green"
            >
              Message <span className="font-normal text-deep-green/72">(optional)</span>
            </label>
            <textarea
              id={`travel-planner-${reactId}-message`}
              rows={5}
              maxLength={1200}
              placeholder="Tell us about your interests, timing or anything else that would help with planning."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message
                  ? `travel-planner-${reactId}-message-error`
                  : `travel-planner-${reactId}-message-hint`
              }
              className={`${inputClasses} min-h-32 resize-y`}
              {...register("message", {
                maxLength: {
                  value: 1200,
                  message: "Keep your message within 1,200 characters.",
                },
              })}
            />
            <p
              id={`travel-planner-${reactId}-message-hint`}
              className="mt-2 text-xs leading-5 text-deep-green/72"
            >
              Do not include passwords, bank details or other sensitive information.
            </p>
            <ValidationMessage
              id={`travel-planner-${reactId}-message-error`}
              message={errors.message?.message}
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isOpening}
          variant="dark"
          size="lg"
          className="mt-8 w-full sm:w-auto"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          <span aria-live="polite">
            {isOpening ? "Opening WhatsApp…" : "Plan on WhatsApp"}
          </span>
        </Button>

        {fallbackMessage ? (
          <div
            role="status"
            className="mt-6 rounded-2xl border border-amber-700/20 bg-amber-50 p-5"
          >
            <p className="text-sm font-semibold text-deep-green">
              WhatsApp could not open automatically. Use the button below to open
              the same prefilled enquiry.
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
