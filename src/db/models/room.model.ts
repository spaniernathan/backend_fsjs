import config from 'config';
import { Model, DataTypes } from 'sequelize';
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
    schema: config.get('databaseSchema'),
    sequelize,
  },
);

export default Rooms;
