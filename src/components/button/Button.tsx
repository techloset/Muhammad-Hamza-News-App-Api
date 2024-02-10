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
        className={` disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80  transition duration-500 rounded-sm  border-2
      flex justify-center items-center text-base font-medium font-poppins ${
        outline
          ? "bg-transparent text-customRed border-red-200 py-3 md:py-5 px-6 md:px-14 text-sm uppercase"
          : "bg-white text-customRed border-customRed py-3 md:py-5 px-6 md:px-9"
      }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
