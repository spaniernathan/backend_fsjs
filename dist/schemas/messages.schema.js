"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomMessageSchema = exports.deleteRoomMessageSchema = exports.postRoomMessageSchema = void 0;
const express_joi_1 = __importDefault(require("express-joi"));
const getRoomMessageSchema = express_joi_1.default.Joi.object({
    params: express_joi_1.default.Joi.object({
        roomId: express_joi_1.default.Joi.string().required(),
    }),
});
exports.getRoomMessageSchema = getRoomMessageSchema;
const postRoomMessageSchema = express_joi_1.default.Joi.object({
    params: express_joi_1.default.Joi.object({
        roomId: express_joi_1.default.Joi.string().required(),
    }),
    body: express_joi_1.default.Joi.object({
        value: express_joi_1.default.Joi.string().required(),
    }),
});
exports.postRoomMessageSchema = postRoomMessageSchema;
const deleteRoomMessageSchema = express_joi_1.default.Joi.object({
    params: express_joi_1.default.Joi.object({
        roomId: express_joi_1.default.Joi.string().required(),
        messageId: express_joi_1.default.Joi.string().required(),
    }),
});
exports.deleteRoomMessageSchema = deleteRoomMessageSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYXMvbWVzc2FnZXMuc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFxQztBQUVyQyxNQUFNLG9CQUFvQixHQUFHLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxNQUFNLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzVCLE1BQU0sRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDM0MsQ0FBQztDQUNILENBQUMsQ0FBQztBQWtCc0Qsb0RBQW9CO0FBaEI3RSxNQUFNLHFCQUFxQixHQUFHLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxNQUFNLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzVCLE1BQU0sRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDM0MsQ0FBQztJQUNGLElBQUksRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsS0FBSyxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUMxQyxDQUFDO0NBQ0gsQ0FBQyxDQUFDO0FBU00sc0RBQXFCO0FBUDlCLE1BQU0sdUJBQXVCLEdBQUcscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3BELE1BQU0sRUFBRSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDNUIsTUFBTSxFQUFFLHFCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUMxQyxTQUFTLEVBQUUscUJBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0tBQzlDLENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFNkIsMERBQXVCIn0=