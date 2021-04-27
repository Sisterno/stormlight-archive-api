import joi from "joi";

export const characterIdSchema= joi.string().regex(/[0-9a-fA-F]{24}/);
// export const characterIdSchema= joi.string().regex(/^[]{24}^/);
const characterNameSchema= joi.string().max(150);
const characterOtherNamesSchema = joi.array().items(
    joi.string().max(150)
);
const characterBornSchema = joi.number().positive()
const characterOrderSchema = joi.number().min(0).max(10)
const characterParentsSchema = joi.object({
    mother:joi.string().max(150),
    father:joi.string().max(150)
})

export const createCharacterSchema = {
    id:characterIdSchema.required(),
    name:characterNameSchema.required(),
    otherNames:characterOtherNamesSchema,
    born:characterBornSchema,
    order:characterOrderSchema,
    parents:characterParentsSchema,
}

export enum orders {
    'Windrunners',
    'Skybreakers',
    'Edgedancers',
    'Truthwatchers',
    'Lightweavers',
    'Elsecallers',
    'Willshapers',
    'Stonewards',
    'Bondsmiths'
} 

export interface charac {
    id:string
    name:string
    otherNames:Array<string>
    born:number
    order?:orders
    parents:{
        mother:string
        father:string
    }
}
export const characters:Array<charac>=[
    {
        id:'001',
        name:'Kaladin',
        otherNames:[],
        born:1153,
        order:0,
        parents:{
            father:'Lirin',
            mother:'Hesina'
        }
    }
]
