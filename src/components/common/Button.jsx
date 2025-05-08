export default function Button(Props) {
  const {
    buttonType = "button",
    buttonText,
    disable = false,
    className,
    ...others
  } = Props;
  return (
    <button
      type={buttonType}
      disabled={disable}
      className={`bg-blue-300 rounded-md h-10 w-20 shadow-md border-b-gray-300 active:shadow-none active:border-transparent active:translate-y-0.5 cursor-pointer font-semibold hover:bg-blue-400 disabled:translate-y-0 disabled:shadow-none disabled:bg-blue-300 disabled:cursor-progress ${className}`}
      {...others}
    >
      {buttonText}
    </button>
  );
}
