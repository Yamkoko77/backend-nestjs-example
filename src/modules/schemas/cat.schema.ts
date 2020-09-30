import { Schema } from 'mongoose';
export const CatSchema = new Schema({
    id: String,
    title: String,
    avatar: String,
    sounds: [String]
});