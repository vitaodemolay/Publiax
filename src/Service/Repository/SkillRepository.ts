import { http } from 'exredux';
import {ISkill} from '../Interfaces/ISkill';

const baseUrl = process.env.BASE_API_URL;
const routeGetSkillData = 'api/UserResume/get';
const routeAddSkillData = 'api/UserResume/register';
const routeUpdateSkillData = 'api/UserResume/update';
const routeDeleteSkillData = 'api/UserResume/delete';
const hardSkillComplement = 'HardSkill';
const languageComplement = 'LanguageSkill';

export class SkillRepository{

    private static urlGet(isLanguage: boolean): string {
        if(isLanguage){
            return `${baseUrl}${routeGetSkillData}${languageComplement}s/`;
        }

        return `${baseUrl}${routeGetSkillData}${hardSkillComplement}s/`;
    }

    private static urlAdd(isLanguage: boolean): string {
        if(isLanguage){
            return `${baseUrl}${routeAddSkillData}${languageComplement}/`;
        }

        return `${baseUrl}${routeAddSkillData}${hardSkillComplement}/`;
    }

    private static urlUpdate(isLanguage: boolean, id: string): string {
        if(isLanguage){
            return `${baseUrl}${routeUpdateSkillData}${languageComplement}/${id}`;
        }

        return `${baseUrl}${routeUpdateSkillData}${hardSkillComplement}/${id}`;
    }

    private static urlDelete(isLanguage: boolean, id: string): string {
        if(isLanguage){
            return `${baseUrl}${routeDeleteSkillData}${languageComplement}/${id}`;
        }

        return `${baseUrl}${routeDeleteSkillData}${hardSkillComplement}/${id}`;
    }


    public static getSkillData(token: string, isLanguage: boolean){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.get<ISkill[]>(this.urlGet(isLanguage), config);
    }

    public static AddNewSkillData(token: string, skill: ISkill, isLanguage: boolean){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.post(this.urlAdd(isLanguage), skill, config);
    }

    public static updateSkillData(token: string, skill: ISkill, isLanguage: boolean,){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.put(this.urlUpdate(isLanguage, skill.skillId), skill, config);
    }

    public static deleteSkillData(token: string, skillId: string, isLanguage: boolean,){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.delete(this.urlDelete(isLanguage, skillId), config);
    }
}