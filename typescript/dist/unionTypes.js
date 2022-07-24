"use strict";
const kgToLbs = (weight) => {
    return typeof weight === "number" ? weight * 2.2 : parseInt(weight) * 4.6;
};
console.log(kgToLbs(20));
console.log(kgToLbs("40kg"));
//# sourceMappingURL=unionTypes.js.map