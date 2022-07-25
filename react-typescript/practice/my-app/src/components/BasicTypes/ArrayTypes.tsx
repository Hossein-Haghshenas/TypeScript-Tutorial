import { nanoid } from "nanoid";
type propType = { favoriteFood: string[] };

function ArrayProps({ favoriteFood }: propType) {
  return (
    <div>
      <p>my favorite foods are : </p>
      <ul>
        {favoriteFood.map((food) => (
          <li key={nanoid()}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayProps;
