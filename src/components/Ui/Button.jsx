export const Button = ({ type, children, ...props }) => {
  return (
    <div>
      <button type="type" {...props}>
        
        {children}
      </button>
    </div>
  );
};
