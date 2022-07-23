"use strict";
const calculateTax = (income, taxYear = 2022) => {
    return (taxYear || 2022) < 2023 ? income * 1.2 : income * 1.5;
};
console.log(calculateTax(60000));
//# sourceMappingURL=function.js.map