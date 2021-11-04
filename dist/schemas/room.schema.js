"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinRoomSchema = exports.deleteRoomSchema = exports.postRoomSchema = void 0;
const express_joi_1 = __importDefault(require("express-joi"));
const postRoomSchema = express_joi_1.default.Joi.object({
    body: express_joi_1.default.Joi.object({
        roomName: express_joi_1.default.Joi.string().required(),
    }),
});
exports.postRoomSchema = postRoomSchema;
const deleteRoomSchema = express_joi_1.default.Joi.object({
    params: express_joi_1.default.Joi.object({
        roomId: express_joi_1.default.Joi.string().required(),
    }),
});
exports.deleteRoomSchema = deleteRoomSchema;
const joinRoomSchema = express_joi_1.default.Joi.object({
    params: express_joi_1.default.Joi.object({
        roomId: express_joi_1.default.Joi.string().required(),
    }),
});
exports.joinRoomSchema = joinRoomSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hcy9yb29tLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBcUM7QUFFckMsTUFBTSxjQUFjLEdBQUcscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzNDLElBQUksRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsUUFBUSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUM3QyxDQUFDO0NBQ0gsQ0FBQyxDQUFDO0FBY00sd0NBQWM7QUFadkIsTUFBTSxnQkFBZ0IsR0FBRyxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0MsTUFBTSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM1QixNQUFNLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0tBQzNDLENBQUM7Q0FDSCxDQUFDLENBQUM7QUFRc0IsNENBQWdCO0FBTnpDLE1BQU0sY0FBYyxHQUFHLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMzQyxNQUFNLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzVCLE1BQU0sRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDM0MsQ0FBQztDQUNILENBQUMsQ0FBQztBQUV3Qyx3Q0FBYyJ9