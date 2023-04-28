import clsx from "clsx";
import { isValidElement, cloneElement, forwardRef, ReactNode, ReactElement, ComponentPropsWithoutRef } from "react";

type RenderButtonProps = {
  className: string;
  children: ReactNode;
};

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "outline" | "secondary" | "error";
  isLoading?: boolean;
  size?: "normal" | "small";
  icon?: ReactNode;
  render?: (renderProps: RenderButtonProps) => ReactElement<any, any> | null;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size = "normal", type = "button", children, icon, className, ...props },
  ref,
) {
  const enabled = !props.disabled;
  const isSmall = size === "small";

  let iconNode: ReactElement | null = null;

  if (icon && isValidElement(icon)) {
    iconNode = cloneElement(icon);
  }

  const btnClass = clsx(
    "inline-flex justify-center items-center border font-bold align-middle transition ease-in-out duration-150",
    isSmall ? "rounded" : "rounded-full",
    "focus:outline-none focus-visible:shadow-outline-gray",
    "shadow-sm",
    enabled && "active:shadow-outline",
    !enabled && "cursor-default",
    variant ? classByVariant[variant] : "bg-default text-darkgrey shadow hover:bg-gray-100",
    !enabled ? (variant ? disabledClassByVariant[variant] : "text-lightgrey bg-gray-300") : variant,
  );

  const sizeClass = clsx(classBySize[size], iconNode ? paddingBySize.normal : paddingBySize[size]);

  return (
    <button
      tabIndex={0}
      {...props}
      disabled={!enabled}
      type={type}
      className={clsx(btnClass, sizeClass, className)}
      ref={ref}
    >
      {
        <>
          {iconNode}
          {children}
        </>
      }
    </button>
  );
});

type ButtonVariant = NonNullable<ButtonProps["variant"]>;

const classByVariant: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-primary text-white",
  outline: "border-blue-500 bg-default text-purple-500 bg-opacity-0 hover:bg-opacity-25 active:bg-opacity-50",
  secondary: "border-primary bg-default text-primary",
  error: "border-transparent bg-red-500 text-white hover:bg-red-800",
};

const disabledClass = "bg-gray-200 border-transparent text-white";
const disabledClassByVariant: Record<ButtonVariant, string> = {
  primary: disabledClass,
  outline: "border border-offwhite bg-default text-offwhite",
  secondary: disabledClass,
  error: disabledClass,
};

const paddingBySize: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-2",
  normal: "px-4 py-2.75",
};

const classBySize: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "text-xs leading-3",
  normal: "text-xs leading-8",
};
