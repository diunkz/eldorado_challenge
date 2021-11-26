import { Request, Response } from "express";
import { LibraryModel } from "../database/models/LibraryModel";
import { Op } from "sequelize";

class LibraryController {
    async findAll(request: Request, response: Response) {
        const { isbn } = request.query;
        const filters: any = {};

        if(isbn) {
            filters.isbn = {
                [Op.like]: `${isbn}%`
            }
        }

        const library = await LibraryModel.findAll({
            where: filters
        });
        
        return library.length
        ? response.status(200).json(library)
        : response.status(204).send();
    }

    async findOne(request: Request, response: Response) {
        const { isbn } = request.params;
        const library = await LibraryModel.findOne({
            where: {
                isbn: {
                    [Op.like]: `${isbn}%`
                }
            }
        });
        return library 
        ? response.status(200).json(library)
        : response.status(204).send();
    }

    async create(request: Request, response: Response) {
        const { book_name, author_name, number_pages, copies_available } = request.body;
        const library = await LibraryModel.create({
            book_name,
            author_name,
            number_pages,
            copies_available
        });

        return response.status(201).json(library);
    }
    
    async update(request: Request, response: Response) {
        const { isbn } = request.params;
        
        await LibraryModel.update(request.body, {
            where: {
                isbn: isbn
            }
        });
        return response.status(204).send();
    }

    async destroy(request: Request, response: Response) {
        const { isbn } = request.params;

        await LibraryModel.destroy({
            where: {
                isbn: isbn
            }
        });
        return response.status(204).send();
    }
}


export default new LibraryController();