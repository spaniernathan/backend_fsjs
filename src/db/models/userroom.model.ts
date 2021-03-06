import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';

class UserRoom extends Model {
  public roomUuid!: string;

  public userUuid!: string;

  public createdAt!: Date;

  public updatedAt!: Date;
}

UserRoom.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'user_room',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default UserRoom;
