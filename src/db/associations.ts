import {
  Session, Message, User, Room, UserRoom,
} from './models';

const createAssociations = () => {
  // User 1:m Session
  User.hasMany(Session, {
    foreignKey: 'userUuid',
    as: 'session',
    onDelete: 'CASCADE',
  });
  Session.belongsTo(User, {
    foreignKey: 'userUuid',
    as: 'user',
  });

  // User n:m Room
  User.belongsToMany(Room, {
    as: 'rooms',
    through: UserRoom,
    foreignKey: 'user_uuid',
    onDelete: 'CASCADE',
  });
  Room.belongsToMany(User, {
    as: 'users',
    through: UserRoom,
    foreignKey: 'user_uuid',
  });

  // Room 1:m Message
  Room.hasMany(Message, {
    foreignKey: 'roomUuid',
    as: 'message',
    onDelete: 'CASCADE',
  });
  Message.belongsTo(Room, {
    foreignKey: 'roomUuid',
    as: 'room',
  });

  // User 1:m Messages
  User.hasMany(Message, {
    foreignKey: 'userUuid',
    as: 'message',
    onDelete: 'CASCADE',
  });
  Message.belongsTo(User, {
    foreignKey: 'userUuid',
    as: 'user',
  });
};

export default createAssociations;
