import config from 'config';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../connect';
import Message from './message.model';

class Rooms extends Model {
    public uuid!: string;

    public type!: 'PRIVATE' | 'ROOM';

    public messages!: Array<Message>;

    public ownerUuid!: string;
}

Rooms.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(7),
      allowNull: false,
      validate: {
        isIn: [['PRIVATE', 'ROOM']],
      },
    },
    ownerUuid: { type: DataTypes.UUID, allowNull: false },
  },
  {
    tableName: 'rooms',
    schema: config.get('databaseSchema'),
    sequelize,
  },
);

export default Rooms;
