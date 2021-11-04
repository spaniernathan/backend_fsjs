"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const sequelize = new sequelize_1.Sequelize(config_1.default.nodeEnv === 'production' ? config_1.default.databaseURL : {
    dialect: 'postgres',
    database: config_1.default.databaseDB,
    username: config_1.default.databaseUsername,
    password: config_1.default.databasePassword,
    host: config_1.default.databaseHost,
    port: config_1.default.databasePort,
});
exports.default = sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXNDO0FBQ3RDLHVEQUErQjtBQUUvQixNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDckYsT0FBTyxFQUFFLFVBQVU7SUFDbkIsUUFBUSxFQUFFLGdCQUFNLENBQUMsVUFBVTtJQUMzQixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxnQkFBZ0I7SUFDakMsUUFBUSxFQUFFLGdCQUFNLENBQUMsZ0JBQWdCO0lBQ2pDLElBQUksRUFBRSxnQkFBTSxDQUFDLFlBQVk7SUFDekIsSUFBSSxFQUFFLGdCQUFNLENBQUMsWUFBWTtDQUMxQixDQUFDLENBQUM7QUFFSCxrQkFBZSxTQUFTLENBQUMifQ==