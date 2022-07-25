type propsType = {
  myHobbies: {
    film: string;
    videoGame: string;
  };
};

function Hobbies({ myHobbies }: propsType) {
  return (
    <div>
      my hobbies are :
      <ul>
        <li>film : {myHobbies.film}</li>
        <li>videoGame : {myHobbies.videoGame}</li>
      </ul>
    </div>
  );
}

export default Hobbies;
