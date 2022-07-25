type OscarProps = {
  children: React.ReactNode;
};

function Oscacr({ children }: OscarProps) {
  return (
    <div>
      im heading in other component as child
      {children}
    </div>
  );
}

export default Oscacr;
