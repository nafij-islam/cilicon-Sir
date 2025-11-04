const Button = ({ children, className }) => {
  return (
    <div className={`${className} px-8 cursor-pointer  rounded bg-primary_500`}>{children}</div>
  );
};
export default Button