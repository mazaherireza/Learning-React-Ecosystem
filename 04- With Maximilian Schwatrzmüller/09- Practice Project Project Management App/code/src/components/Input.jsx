import { forwardRef } from "react";

const Input = forwardRef(({ label, hasTextarea, ...rest }, ref) => {
  const utilityClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {hasTextarea ? (
        <textarea
          ref={ref}
          className={utilityClasses}
          {...rest}
        ></textarea>
      ) : (
        <input ref={ref} className={utilityClasses} {...rest}></input>
      )}
    </p>
  );
});

export default Input;
