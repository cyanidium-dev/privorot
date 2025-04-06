const Container = ({ children }) => {
  const maxWidth = 360;

  return (
    <div className={`max-w-[${maxWidth}px] mx-auto px-[25px]`}>{children}</div>
  );
};

export default Container;
