import { Model } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';

class UserRoom extends Model {}

UserRoom.init(
  {},
  {
    tableName: 'user_room',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default UserRoom;
