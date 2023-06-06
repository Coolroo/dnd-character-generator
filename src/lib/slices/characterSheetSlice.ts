import { CharacterDetails, CharacterSheet, MoneyPouch, SavingThrow, Skill, Skills, Stats, WeaponEntry, emptyCharacterSheet, Field, InputState } from "@/types";
import { StateCreator } from "zustand";

export interface CharacterSheetSlice{
    character: CharacterSheet;
    setCharacterDetails: (characterDetails: CharacterDetails) => void;
    setStats: (stats: Stats) => void;
    setSkills: (skills: Skills) => void;
    addProficiency: (proficiency: Field<SavingThrow | Skill>) => void;
    setProficiencies: (proficiencies: Field<(SavingThrow | Skill)>[]) => void;
    addWeapon: (weapon: Field<WeaponEntry>) => void;
    setWeapons: (weapons: Field<WeaponEntry>[]) => void;
    setSpellcasting: (spellcasting: Field<string>) => void;
    setMoney: (money: MoneyPouch) => void;
    setEquipment: (equipment: Field<string>) => void;
    setData: (state: CharacterSheetSlice) => void;
}

export const createCharacterSheetSlice: StateCreator<CharacterSheetSlice> = (set, get) => ({
    character: emptyCharacterSheet(),
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
    addProficiency: (proficiency: Field<SavingThrow | Skill>) => {
        let character = get().character
        character.skills.proficiencies?.push(proficiency);
        set({character})
    },
    setProficiencies: (proficiencies: Field<(SavingThrow | Skill)>[]) => {
        let character = get().character;
        character.skills.proficiencies = proficiencies;
        set({
            character
        })
    },
    addWeapon: (weapon: Field<WeaponEntry>) => {
        let character = get().character;
        character.attacks.weapons.push(weapon);
        set({character});
    },
    setWeapons: (weapons: Field<WeaponEntry>[]) => {
        let character = get().character;
        character.attacks.weapons = weapons;
        set({
            character
        })
    },
    setSpellcasting: (spellcasting: Field<string>) => {
        let character = get().character;
        character.attacks.spellcasting = spellcasting;
        set({
            character
        })
    },
    setMoney: (money: MoneyPouch) => {
        let character = get().character;
        character.belongings.money = money;
        set({
            character
        })
    },
    setEquipment: (equipment: Field<string>) => {
        let character = get().character;
        character.belongings.equipment = equipment;
        set({
            character
        })
    },
    reset: ()  => {
        set({character: emptyCharacterSheet()})
    },
    setData: (state: CharacterSheetSlice) => {
        set(state)
    }
})