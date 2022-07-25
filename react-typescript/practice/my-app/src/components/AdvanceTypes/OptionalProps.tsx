type PropsType = {
  myNumber?: number;
};

function MyNumber({ myNumber = 0 }: PropsType) {
  return (
    <section>
      <p>my number (test for optional props) : {myNumber}</p>
    </section>
  );
}

export default MyNumber;
