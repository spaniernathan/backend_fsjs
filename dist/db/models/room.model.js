"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const connect_1 = __importDefault(require("../connect"));
class Rooms extends sequelize_1.Model {
}
Rooms.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
    },
    userUuid: { type: sequelize_1.DataTypes.UUID, allowNull: false },
    roomName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    tableName: 'rooms',
    schema: config_1.default.databaseSchema,
    sequelize: connect_1.default,
});
exports.default = Rooms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9tb2RlbHMvcm9vbS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUE2QztBQUM3QywwREFBa0M7QUFDbEMseURBQW1DO0FBR25DLE1BQU0sS0FBTSxTQUFRLGlCQUFLO0NBTXhCO0FBRUQsS0FBSyxDQUFDLElBQUksQ0FDUjtJQUNFLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUNwRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtDQUN2RCxFQUNEO0lBQ0UsU0FBUyxFQUFFLE9BQU87SUFDbEIsTUFBTSxFQUFFLGdCQUFNLENBQUMsY0FBYztJQUM3QixTQUFTLEVBQVQsaUJBQVM7Q0FDVixDQUNGLENBQUM7QUFFRixrQkFBZSxLQUFLLENBQUMifQ==