const Container = ({ children }) => {
  const maxWidth = 360;

  return (
    <section className={`max-w-[${maxWidth}px] mx-auto px-[25px]`}>
      {children}
    </section>
  );
};

export default Container;
