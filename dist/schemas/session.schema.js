"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSessionSchema = exports.postSessionSchema = exports.getSessionSchema = void 0;
const express_joi_1 = __importDefault(require("express-joi"));
const getSessionSchema = {
    params: express_joi_1.default.Joi.object({
        uuid: express_joi_1.default.Joi.string().required(),
    }),
};
exports.getSessionSchema = getSessionSchema;
const postSessionSchema = express_joi_1.default.Joi.object({
    body: express_joi_1.default.Joi.object({
        email: express_joi_1.default.Joi.string().email().required(),
        password: express_joi_1.default.Joi.string().required(),
    }),
});
exports.postSessionSchema = postSessionSchema;
const deleteSessionSchema = express_joi_1.default.Joi.object({
    params: express_joi_1.default.Joi.object({
        uuid: express_joi_1.default.Joi.string().required(),
    }),
});
exports.deleteSessionSchema = deleteSessionSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hcy9zZXNzaW9uLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBcUM7QUFFckMsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixNQUFNLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDekMsQ0FBQztDQUNILENBQUM7QUFlTyw0Q0FBZ0I7QUFiekIsTUFBTSxpQkFBaUIsR0FBRyxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDOUMsSUFBSSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixLQUFLLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ2pELFFBQVEsRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDN0MsQ0FBQztDQUNILENBQUMsQ0FBQztBQVF3Qiw4Q0FBaUI7QUFONUMsTUFBTSxtQkFBbUIsR0FBRyxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDaEQsTUFBTSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0tBQ3pDLENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFMkMsa0RBQW1CIn0=