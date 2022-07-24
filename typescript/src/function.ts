const calculateTax = (income: any, taxYear: Number = 2022): Number => {
  return (taxYear || 2022) < 2023 ? income * 1.2 : income * 1.5;
};

console.log(calculateTax(60000));
