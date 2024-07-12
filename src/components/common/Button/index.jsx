const Button = ({ text, type, handleClick }) => {
  const buttonType = {
    home: ["rounded-md px-3 py-1 border-slate-100 bg-cream w-28"],
    category: ["text-start text-sm p-2 hover:bg-lightBrown w-40"],
  };

  return (
    <button className={buttonType[type]} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
