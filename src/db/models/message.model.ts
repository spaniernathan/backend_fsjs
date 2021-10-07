import config from 'config';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../connect';

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
    value: { type: DataTypes.STRING },
    roomUuid: { type: DataTypes.UUID },
  },
  {
    tableName: 'messages',
    schema: config.get('databaseSchema'),
    sequelize,
  },
);

export default Message;
