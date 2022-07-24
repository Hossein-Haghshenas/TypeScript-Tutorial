type Customer = {
  birthday: Date;
};

const getCustomer = (id: number): Customer | null | undefined => {
  return id === 0 ? null : { birthday: new Date() };
};

const customer = getCustomer(5);

// optional peroperty access operator

console.log(customer?.birthday?.getFullYear());
