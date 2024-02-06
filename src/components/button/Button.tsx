interface ButtonProps {
  text: string;
  disabled?: boolean;
  outline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  outline,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={` disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition rounded-sm  border-2
      flex justify-center items-centertext-sm font-normal text-base font-poppins ${
        outline
          ? "bg-transparent text-red-700 border-red-200 py-3 md:py-5 px-6 md:px-14 text-sm uppercase"
          : "bg-white text-red-700 border-red-700 py-3 md:py-5 px-6 md:px-9"
      }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
