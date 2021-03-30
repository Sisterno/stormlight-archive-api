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
    born:orders
    order?:number
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
