import { twMerge } from "tailwind-merge";

export function Button({ children, className, handleClick }) {
    return (
        <button
            onClick={handleClick}
            className={twMerge(
                "rounded-md px-3 py-1 border border-slate-100 bg-yellow-600",
                className
            )}
        >
            {children}
        </button>
    );
}
