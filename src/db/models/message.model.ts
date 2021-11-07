import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';

class Message extends Model {
    public uuid!: string;

    public value!: string;

    public ownerUuid!: string;

    public senderName!: string;

    public roomUuid!: string;

    public createdAt!: Date;

    public updatedAt!: Date;
}

Message.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    value: { type: DataTypes.STRING, allowNull: false },
    ownerUuid: { type: DataTypes.UUID, allowNull: false },
    roomUuid: { type: DataTypes.UUID, allowNull: false },
    senderName: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'messages',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default Message;
