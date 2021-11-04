"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.findUserByUuid = exports.createUser = void 0;
const lodash_1 = require("lodash");
const models_1 = require("../db/models");
const createUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.User.create(Object.assign({}, input));
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createUser = createUser;
const findUserByUuid = (uuid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.User.findOne({
            where: { uuid },
        });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.findUserByUuid = findUserByUuid;
const validatePassword = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ where: { email } });
        if (!user) {
            return null;
        }
        const isValid = yield user.comparePassword(password);
        if (!isValid) {
            return null;
        }
        return (0, lodash_1.omit)(user, 'password');
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.validatePassword = validatePassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIseUNBQW9DO0FBRTdCLE1BQU0sVUFBVSxHQUFHLENBQU8sS0FBVyxFQUFFLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE9BQU8sTUFBTSxhQUFJLENBQUMsTUFBTSxtQkFDbkIsS0FBSyxFQUNSLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDLENBQUEsQ0FBQztBQVJXLFFBQUEsVUFBVSxjQVFyQjtBQUVLLE1BQU0sY0FBYyxHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7SUFDbkQsSUFBSTtRQUNGLE9BQU8sTUFBTSxhQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRTtTQUNoQixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDLENBQUEsQ0FBQztBQVJXLFFBQUEsY0FBYyxrQkFRekI7QUFFSyxNQUFNLGdCQUFnQixHQUFHLENBQU8sRUFDckMsS0FBSyxFQUNMLFFBQVEsR0FJVCxFQUFFLEVBQUU7SUFDSCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDL0I7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFwQlcsUUFBQSxnQkFBZ0Isb0JBb0IzQiJ9