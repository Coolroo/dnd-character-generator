import { CharacterDetails, MoneyPouch, SavingThrow, Skill, Skills, Stats, WeaponEntry } from "@/types";
import { StateCreator } from "zustand";

export interface CharacterSheet {
    character_details: CharacterDetails,
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

const initialState: CharacterSheet = {
    character_details: {
        appearance: { 
        }
    },
    skills: {
        stats: {
        },
        proficiencies: []
    },
    attacks: {
        weapons: [],
    },
    belongings: {
        money: {},
    }
}

export interface CharacterSheetSlice{
    character: CharacterSheet;
    setCharacterDetails: (characterDetails: CharacterDetails) => void;
    setStats: (stats: Stats) => void;
    setSkills: (skills: Skills) => void;
    addProficiency: (proficiency: SavingThrow | Skill) => void;
    setProficiencies: (proficiencies: (SavingThrow | Skill)[]) => void;
    addWeapon: (weapon: WeaponEntry) => void;
    setWeapons: (weapons: WeaponEntry[]) => void;
    setSpellcasting: (spellcasting: string) => void;
    setMoney: (money: MoneyPouch) => void;
    setEquipment: (equipment: string) => void;
}

export const createCharacterSheetSlice: StateCreator<CharacterSheetSlice> = (set, get) => ({
    character: initialState,
    setCharacterDetails: (characterDetails: CharacterDetails) => {
        set({
            character: {
                ...get().character,
                character_details: characterDetails
            }
        })
    },
    setStats: (stats: Stats) => {
        set({
            character: {
                ...get().character,
                skills: {
                    ...get().character.skills,
                    stats
                }
            }
        })
    },
    setSkills: (skills: Skills) => {
        set({
            character: {
                ...get().character,
                skills
            }
        })
    },
    addProficiency: (proficiency: SavingThrow | Skill) => {
        let character = get().character
        character.skills.proficiencies?.push(proficiency);
        set({character})
    },
    setProficiencies: (proficiencies: (SavingThrow | Skill)[]) => {
        let character = get().character;
        set({
            character: {
                ...character,
                skills: {
                    ...character.skills,
                    proficiencies
                }
            }
        })
    },
    addWeapon: (weapon: WeaponEntry) => {
        let character = get().character;
        character.attacks.weapons.push(weapon);
        set({character});
    },
    setWeapons: (weapons: WeaponEntry[]) => {
        let character = get().character;
        set({
            character: {
                ...character,
                attacks: {
                    ...character.attacks,
                    weapons
                }
            }
        })
    },
    setSpellcasting: (spellcasting: string) => {
        let character = get().character;
        set({
            character: {
                ...character,
                attacks: {
                    ...character.attacks,
                    spellcasting
                }
            }
        })
    },
    setMoney: (money: MoneyPouch) => {
        let character = get().character;
        set({
            character: {
                ...character,
                belongings: {
                    ...character.belongings,
                    money
                }
            }
        })
    },
    setEquipment: (equipment: string) => {
        let character = get().character;
        set({
            character: {
                ...character,
                belongings: {
                    ...character.belongings,
                    equipment
                }
            }
        })
    },
})