const TypingProps = ({
  name,
  age,
  job,
}: {
  name: string;
  age: number;
  job: boolean;
}) => {
  return (
    <section>
      <h2>
        Hey its first props and im {name} and i have {age} years old
      </h2>
      <h3>
        im{" "}
        {job
          ? "programmer and i like web development"
          : "in home everyday and i dont have any job "}
      </h3>
    </section>
  );
};

export default TypingProps;
