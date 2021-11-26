import { DataTypes } from "sequelize";
import { db } from "../config";

export const LibraryModel = db.define('library', {
    isbn: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    copies_available: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})