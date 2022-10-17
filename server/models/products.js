const { DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/database')

module.exports = {
    Products : sequelize.define('products', {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        product_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        product_img: {
          type: DataTypes.CHAR,
          allowNull: false,
        }, 
        product_description: {
          type: DataTypes.CHAR,
          allowNull: true,
        },
        createdAt: {
          allowNull: false,
          defaultValue: new Date(),
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          defaultValue: new Date(),
          type: Sequelize.DATE
        }
    }) 
}