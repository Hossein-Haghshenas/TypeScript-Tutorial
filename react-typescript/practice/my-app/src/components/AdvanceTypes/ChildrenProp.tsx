type ChildProps = {
  children: string;
};

function Heading({ children }: ChildProps) {
  return <h2>{children}</h2>;
}

export default Heading;
