"use strict";
var _a;
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
const customer = getCustomer(5);
// optional peroperty access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=optionalChaining.js.map