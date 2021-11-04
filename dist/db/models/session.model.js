"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const connect_1 = __importDefault(require("../connect"));
class Session extends sequelize_1.Model {
}
Session.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
    },
    userUuid: { type: sequelize_1.DataTypes.UUID },
    valid: { type: sequelize_1.DataTypes.BOOLEAN },
    userAgent: { type: sequelize_1.DataTypes.STRING },
}, {
    tableName: 'sessions',
    schema: config_1.default.databaseSchema,
    sequelize: connect_1.default,
});
exports.default = Session;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9tb2RlbHMvc2Vzc2lvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUE2QztBQUM3QywwREFBa0M7QUFDbEMseURBQW1DO0FBRW5DLE1BQU0sT0FBUSxTQUFRLGlCQUFLO0NBUTFCO0FBRUQsT0FBTyxDQUFDLElBQUksQ0FDVjtJQUNFLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDbEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTyxFQUFFO0lBQ2xDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sRUFBRTtDQUN0QyxFQUNEO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLGdCQUFNLENBQUMsY0FBYztJQUM3QixTQUFTLEVBQVQsaUJBQVM7Q0FDVixDQUNGLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==