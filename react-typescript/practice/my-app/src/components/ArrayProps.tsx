type propType = { favoriteFood: string[] };

function ArrayProps({ favoriteFood }: propType) {
  return (
    <div>
      <p>my favorite foods are : </p>
      <ul>
        {favoriteFood.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayProps;
