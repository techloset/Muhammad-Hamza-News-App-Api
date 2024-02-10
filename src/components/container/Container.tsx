interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-28 md:px-16 px-0 ">{children}</div>
  );
};

export default Container;
