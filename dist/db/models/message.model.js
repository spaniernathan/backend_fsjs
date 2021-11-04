"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const connect_1 = __importDefault(require("../connect"));
class Message extends sequelize_1.Model {
}
Message.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
    },
    roomUuid: { type: sequelize_1.DataTypes.UUID, allowNull: false },
    userUuid: { type: sequelize_1.DataTypes.UUID, allowNull: false },
    value: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    tableName: 'messages',
    schema: config_1.default.databaseSchema,
    sequelize: connect_1.default,
});
exports.default = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9tb2RlbHMvbWVzc2FnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUE2QztBQUM3QywwREFBa0M7QUFDbEMseURBQW1DO0FBRW5DLE1BQU0sT0FBUSxTQUFRLGlCQUFLO0NBTTFCO0FBRUQsT0FBTyxDQUFDLElBQUksQ0FDVjtJQUNFLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUNwRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUNwRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtDQUNwRCxFQUNEO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLGdCQUFNLENBQUMsY0FBYztJQUM3QixTQUFTLEVBQVQsaUJBQVM7Q0FDVixDQUNGLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==