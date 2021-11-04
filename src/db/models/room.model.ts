import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';
import Message from './message.model';

class Rooms extends Model {
    public uuid!: string;

    public messages!: Array<Message>;

    public userUuid!: string;
}

Rooms.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    userUuid: { type: DataTypes.UUID, allowNull: false },
    roomName: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: 'rooms',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default Rooms;
