type StatuseProps = {
  status: "loading" | "success" | "error";
};

function Status({ status }: StatuseProps) {
  let message;
  status === `loading`
    ? (message = "Loading...")
    : status === `success`
    ? (message = "Data fetched successfully")
    : status === `error`
    ? (message = "Error fetching data")
    : (message = null);

  return <div>{message}</div>;
}

export default Status;
