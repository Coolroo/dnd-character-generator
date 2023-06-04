import { CharacterDetails, SavingThrow, Skill, Skills, WeaponEntry } from "@/types";

export interface CharacterSheet {
    character_info: CharacterDetails,
    skills: Skills,
    attacks: {
        weapons: WeaponEntry[]
        spellcasting?: string;
    }
    belongings: {
        money: {
            cp?: number;
            sp?: number;
            ep?: number;
            gp?: number;
            pp?: number;
        };
        equipment?: string;
    }

}

