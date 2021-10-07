import {
  Session, Message, User, Room,
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
  // User.hasMany(Room);
  // Room.belongsToMany(User, { through: 'RoomUser' });

  // Room 1:m Message
  // Room.hasMany(Message);
};

export default createAssociations;
