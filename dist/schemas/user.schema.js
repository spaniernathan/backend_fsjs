"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserSchema = exports.getUserSchema = void 0;
const express_joi_1 = __importDefault(require("express-joi"));
const getUserSchema = {
    params: express_joi_1.default.Joi.object({
        uuid: express_joi_1.default.Joi.string().required(),
    }),
};
exports.getUserSchema = getUserSchema;
const postUserSchema = {
    body: express_joi_1.default.Joi.object({
        displayName: express_joi_1.default.Joi.string().required(),
        email: express_joi_1.default.Joi.string().email().required(),
        password: express_joi_1.default.Joi.string().min(3).required(),
    }),
};
exports.postUserSchema = postUserSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hcy91c2VyLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBcUM7QUFFckMsTUFBTSxhQUFhLEdBQUc7SUFDcEIsTUFBTSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0tBQ3pDLENBQUM7Q0FDSCxDQUFDO0FBVU8sc0NBQWE7QUFSdEIsTUFBTSxjQUFjLEdBQUc7SUFDckIsSUFBSSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixXQUFXLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQy9DLEtBQUssRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDakQsUUFBUSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7S0FDcEQsQ0FBQztDQUNILENBQUM7QUFFc0Isd0NBQWMifQ==