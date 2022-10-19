const { DataTypes } = require('sequelize')

const { sequelize } = require('../database/database')

module.exports = {
    Order : sequelize.define('order', {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

    }) 
}