import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';

console.log(config);
class Message extends Model {
    public uuid!: string;

    public value!: string;

    public roomUuid!: string;
}

Message.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    roomUuid: { type: DataTypes.UUID, allowNull: false },
    userUuid: { type: DataTypes.UUID, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: 'messages',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default Message;
