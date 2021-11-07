import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';

class SocketRoom extends Model {
  public uuid!: string;

  public socketUuid!: string;

  public roomUuid!: string;

  public createdAt!: Date;

  public updatedAt!: Date;
}

SocketRoom.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    socketUuid: { type: DataTypes.STRING, allowNull: false },
    roomUuid: { type: DataTypes.UUID, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'socket_room',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default SocketRoom;
