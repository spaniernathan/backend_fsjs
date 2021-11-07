import {
  Session, Message, User, Room, UserRoom,
} from './models';

const createAssociations = () => {
  // User 1:m Session
  User.hasMany(Session, {
    foreignKey: 'userUuid',
    as: 'sessions',
    onDelete: 'CASCADE',
  });
  Session.belongsTo(User, {
    foreignKey: 'userUuid',
    as: 'user',
  });

  // User n:m Room
  User.hasMany(Room, {
    as: 'owner',
    foreignKey: 'ownerUuid',
    onDelete: 'CASCADE',
  });
  User.belongsToMany(Room, {
    as: 'rooms',
    through: UserRoom,
    foreignKey: 'userUuid',
    onDelete: 'CASCADE',
  });
  Room.belongsToMany(User, {
    as: 'users',
    through: UserRoom,
    foreignKey: 'roomUuid',
  });

  // Room 1:m Message
  Room.hasMany(Message, {
    foreignKey: 'roomUuid',
    as: 'messages',
    onDelete: 'CASCADE',
  });
  Message.belongsTo(Room, {
    foreignKey: 'roomUuid',
    as: 'room',
  });

  // User 1:m Messages
  User.hasMany(Message, {
    foreignKey: 'ownerUuid',
    as: 'messages',
    onDelete: 'CASCADE',
  });
  Message.belongsTo(User, {
    foreignKey: 'ownerUuid',
    as: 'user',
  });
};

export default createAssociations;
