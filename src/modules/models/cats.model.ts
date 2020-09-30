import { ApiProperty } from "@nestjs/swagger";
import { CatsInterface } from "../cats/cats.interface";

export class CatModel implements CatsInterface{
    @ApiProperty()
    id: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    avatar: string;
    @ApiProperty()
    sounds: string[];
}