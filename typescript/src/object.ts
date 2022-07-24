type User = {
  userName: string;
  password: string;
  readonly id: number;
  retire: (date: Date) => void;
};

const users: User = {
  userName: "hossein",
  password: "12345hossein",
  id: 20,
  retire: (date: Date) => [console.log(date)],
};
