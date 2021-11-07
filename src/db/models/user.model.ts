import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import config from '../../config';
import sequelize from '../connect';

class User extends Model {
    public uuid!: string;

    public displayName!: string;

    public email!: string;

    public password!: string;

    public createdAt!: Date;

    public updatedAt!: Date;

    comparePassword = (
      p: string,
    ): Promise<Boolean> => bcrypt.compare(p, this.password).catch(() => false)
}

User.init(
  {
    uuid: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: new DataTypes.STRING(64),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
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
    tableName: 'users',
    schema: config.databaseSchema,
    sequelize,
  },
);

User.beforeCreate(async (user: User) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hashSync(user.password, salt);
  user.set('password', hash);
});

export default User;
