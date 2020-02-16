import { IUserData } from "./IUserData";
import { IUserAddress } from "./IUserAddress";
import { IPositionHeld } from "./IPositionHeld";
import { IEducational } from "./IEducational";
import { ISkill } from "./ISkill";

export interface IResume{
    presentationLetter?: string,

    userData?: IUserData,
    userAddress?: IUserAddress[],
    positions?: IPositionHeld[],
    educationals?: IEducational[],
    skills?: ISkill[],
    languages?: ISkill[],
}