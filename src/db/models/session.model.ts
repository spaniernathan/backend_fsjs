import config from 'config';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../connect';

class Session extends Model {
    public uuid!: string;

    public userUuid!: string;

    public valid!: boolean;

    public userAgent!: string;
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
  },
  {
    tableName: 'sessions',
    schema: config.get('databaseSchema'),
    sequelize,
  },
);

export default Session;
