const Container = ({ children }) => {
  const maxWidth = 1280;

  return (
    <section className={`max-w-[${maxWidth}px] mx-auto p-2 xl:p-0`}>
      {children}
    </section>
  );
};

export default Container;
