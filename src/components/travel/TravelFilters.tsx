import { cn } from "../../utils/cn";

export type TravelFilterOption<T extends string = string> = {
  value: T;
  label: string;
  count?: number;
  disabled?: boolean;
};

export type TravelFiltersProps<T extends string = string> = {
  legend: string;
  options: readonly TravelFilterOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
  allLabel?: string;
  ariaControls?: string;
  className?: string;
};

export function TravelFilters<T extends string>({
  legend,
  options,
  value,
  onChange,
  allLabel = "All",
  ariaControls,
  className,
}: TravelFiltersProps<T>) {
  return (
    <fieldset className={cn("min-w-0", className)}>
      <legend className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-deep-green">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={value === null}
          aria-controls={ariaControls}
          onClick={() => onChange(null)}
          className={cn(
            "inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition-[color,background-color,border-color,box-shadow]",
            value === null
              ? "border-deep-green bg-deep-green text-white shadow-[0_8px_20px_-14px_rgba(11,53,45,0.7)]"
              : "border-deep-green/14 bg-white text-deep-green/72 hover:border-emerald/40 hover:text-deep-green",
          )}
        >
          {allLabel}
        </button>
        {options.map((option) => {
          const selected = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              disabled={option.disabled}
              aria-pressed={selected}
              aria-controls={ariaControls}
              onClick={() => onChange(option.value)}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-[color,background-color,border-color,box-shadow] disabled:pointer-events-none disabled:opacity-45",
                selected
                  ? "border-deep-green bg-deep-green text-white shadow-[0_8px_20px_-14px_rgba(11,53,45,0.7)]"
                  : "border-deep-green/14 bg-white text-deep-green/72 hover:border-emerald/40 hover:text-deep-green",
              )}
            >
              <span>{option.label}</span>
              {typeof option.count === "number" ? (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[0.68rem] font-bold",
                    selected
                      ? "bg-white/14 text-white"
                      : "bg-deep-green/7 text-deep-green/62",
                  )}
                  aria-label={`${option.count} items`}
                >
                  {option.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
