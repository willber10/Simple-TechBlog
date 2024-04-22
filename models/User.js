const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}


User.init(
    {
        id: {
          type: DataTypes.INTEGER, 
          primaryKey: true, 
          autoIncrement: true 
        },
        username: {
          type: DataTypes.STRING, 
        },
        twitter: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        
        github: {
            type: DataTypes.STRING, 
            allowNull: true 
        },
        email: {
          type: DataTypes.STRING,
          unique: true, 
          validate: {
            isEmail: true 
          }
        },
        password: {
          type: DataTypes.STRING, 
          validate: {
            len: [4] 
          }
        }
      },
  {
      hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },

    sequelize, 
    timestamps: false,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'user'
  }
);

module.exports = User;