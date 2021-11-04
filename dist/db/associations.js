"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const createAssociations = () => {
    // User 1:m Session
    models_1.User.hasMany(models_1.Session, {
        foreignKey: 'userUuid',
        as: 'session',
        onDelete: 'CASCADE',
    });
    models_1.Session.belongsTo(models_1.User, {
        foreignKey: 'userUuid',
        as: 'user',
    });
    // User n:m Room
    models_1.User.hasMany(models_1.Room, {
        foreignKey: 'userUuid',
        as: 'rooms',
        onDelete: 'CASCADE',
    });
    models_1.Room.belongsToMany(models_1.User, { through: 'RoomUser' });
    // Room 1:m Message
    models_1.Room.hasMany(models_1.Message, {
        foreignKey: 'roomUuid',
        as: 'message',
        onDelete: 'CASCADE',
    });
    models_1.Message.belongsTo(models_1.Room, {
        foreignKey: 'roomUuid',
        as: 'room',
    });
    // User 1:m Messages
    models_1.User.hasMany(models_1.Message, {
        foreignKey: 'userUuid',
        as: 'message',
        onDelete: 'CASCADE',
    });
    models_1.Message.belongsTo(models_1.User, {
        foreignKey: 'userUuid',
        as: 'user',
    });
};
exports.default = createAssociations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzb2NpYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiL2Fzc29jaWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUVrQjtBQUVsQixNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtJQUM5QixtQkFBbUI7SUFDbkIsYUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBTyxFQUFFO1FBQ3BCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLEVBQUUsRUFBRSxTQUFTO1FBQ2IsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsZ0JBQU8sQ0FBQyxTQUFTLENBQUMsYUFBSSxFQUFFO1FBQ3RCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLEVBQUUsRUFBRSxNQUFNO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsZ0JBQWdCO0lBQ2hCLGFBQUksQ0FBQyxPQUFPLENBQUMsYUFBSSxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLEVBQUUsRUFBRSxPQUFPO1FBQ1gsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsYUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUVsRCxtQkFBbUI7SUFDbkIsYUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBTyxFQUFFO1FBQ3BCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLEVBQUUsRUFBRSxTQUFTO1FBQ2IsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsZ0JBQU8sQ0FBQyxTQUFTLENBQUMsYUFBSSxFQUFFO1FBQ3RCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLEVBQUUsRUFBRSxNQUFNO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsb0JBQW9CO0lBQ3BCLGFBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQU8sRUFBRTtRQUNwQixVQUFVLEVBQUUsVUFBVTtRQUN0QixFQUFFLEVBQUUsU0FBUztRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUMsQ0FBQztJQUNILGdCQUFPLENBQUMsU0FBUyxDQUFDLGFBQUksRUFBRTtRQUN0QixVQUFVLEVBQUUsVUFBVTtRQUN0QixFQUFFLEVBQUUsTUFBTTtLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlLGtCQUFrQixDQUFDIn0=