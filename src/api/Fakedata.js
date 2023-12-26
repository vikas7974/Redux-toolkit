import {Chance} from "chance"
const chance=Chance();

export const fake=()=>{
    return chance.name({middle:true});
};