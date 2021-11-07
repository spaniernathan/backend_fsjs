import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';
import Message from './message.model';

class Rooms extends Model {
    public uuid!: string;

    public messages!: Array<Message>;

    public ownerUuid!: string;

    public roomName!: string;

    public createdAt!: Date;

    public updatedAt!: Date;
}

Rooms.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerUuid: { type: DataTypes.UUID, allowNull: false },
    roomName: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'rooms',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default Rooms;
