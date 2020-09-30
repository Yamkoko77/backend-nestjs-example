import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatDocument, CatsInterface } from './cats.interface';

@Injectable()
export class CatsService {
    //private cats: CatsInterface[] = [];
    constructor(@InjectModel('cats') private catTable: Model<CatDocument>) { }

    async createCat(cat: CatsInterface) {
        // this.cats.push(cat);
        // return cat;
        const createdCat = new this.catTable(cat);
        return await createdCat.save();
    }

    async findAllCats() {
        // return this.cats;
        const getAllCats = await this.catTable.find();
        return getAllCats;
    }

    async getCatById(id: string) {
        // const found = this.cats.find(f => f.id === Id);
        // if(!found) throw new NotFoundException(`Cat with ${Id} not found.`);
        // return found;
        const findCatById = await this.catTable.findOne({ id: id }).exec();
        if (!findCatById) throw new NotFoundException(`Cat with Id: ${id} not found.`);
        return findCatById;
    }

    async removeCat(id: string) {
        // const found = this.cats.find(f => f.id === id);
        // if(!found) throw new NotFoundException(`Cat with ${id} not found.`);
        // this.cats = this.cats.filter(item => {return item.id !== id});
        // return this.cats;

        const findCatById = await this.catTable.findOne({ id: id }).exec();
        if (!findCatById) throw new NotFoundException(`Cat with Id: ${id} not found.`);
        await this.catTable.deleteOne({ id: id });
        return id;
    }
}
