import { Model, DataTypes } from 'sequelize';
import config from '../../config';
import sequelize from '../connect';

class Session extends Model {
    public uuid!: string;

    public userUuid!: string;

    public valid!: boolean;

    public userAgent!: string;

    public createdAt!: Date;

    public updatedAt!: Date;
}

Session.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    userUuid: { type: DataTypes.UUID },
    valid: { type: DataTypes.BOOLEAN },
    userAgent: { type: DataTypes.STRING },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'sessions',
    schema: config.databaseSchema,
    sequelize,
  },
);

export default Session;
