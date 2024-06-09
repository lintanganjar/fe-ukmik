import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import EyeOpenIcon from "@/components/icons/EyeOpenIcon";
import EyeCloseIcon from "@/components/icons/EyeCloseIcon";

const Input = forwardRef(({ className, icon, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative flex items-center">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={inputType}
        className={cn(
          `${icon ? "pl-10" : "pl-3"}`, // Sesuaikan padding kiri untuk ikon
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOpenIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <EyeCloseIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
