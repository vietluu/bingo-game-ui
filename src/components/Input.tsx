import React from "react";
import IconEye from "../assets/svg/eyeIcon.svg?react";
import IconHiddenEye from "../assets/svg/hiddenEyeIcon.svg?react";
import clsx from "clsx";
type InputProps = {
  inputRef?: React.Ref<HTMLInputElement> | null;
  sunfix?: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
};

const Input = ({
  inputRef,
  sunfix,
  prefix,
  className,
  type,
  placeholder,
  disabled,
  error,
  onChange,
  onClick,
  onFocus,
  onBlur,
  required,
  value,
  name,
}: InputProps) => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const hasValue = (value && value.length) || !!inputRef?.current?.value > 0;

  return (
    <div
      className={`flex px-4 items-center bg-light-blue-50 border border-light-blue-100 relative ${className}`}
    >
      {prefix && <span className=" mr-2">{prefix}</span>}
      <div
        className={clsx("flex items-center gap-x-2 absolute left-12 h-full", {
          hidden: isFocused || hasValue,
        })}
      >
        <span className="font-bold text-light-blue-100 text-sm">{placeholder}</span>
        {required && (
          <span className="font-bold text-custom-pink-500 text-sm">*</span>
        )}
      </div>
      <input
        name={name}
        ref={inputRef}
        value={value}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlurCapture={() => {
          setIsFocused(false);
        }}
        type={
          type === "password"
            ? !isShowPassword
              ? "password"
              : "text"
            : type || "text"
        }
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        className="p-2 flex-grow focus:outline-none focus:ring-none focus:ring-none border-none focus:border-none bg-transparent"
      />
      {type === "password" && (
        <span
          onClick={() => setIsShowPassword(!isShowPassword)}
          className=" ml-2 cursor-pointer"
        >
          {isShowPassword ? <IconEye /> : <IconHiddenEye />}
        </span>
      )}
      {sunfix && type !== "password" && (
        <span className=" ml-2">{sunfix}</span>
      )}
    </div>
  );
};
export default Input;
