const { DataTypes } = require('sequelize')

const { sequelize } = require('../database/database')

module.exports = {
    Wishlist : sequelize.define('wishlist', {
        wishlist_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    }) 
}