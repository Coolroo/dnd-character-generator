export type pages = 'Info' | 'Equipment' | 'Character Details' | 'Skills' | 'Review & Finish';

export type ProgressBarStep = {
    id: number;
    name: pages;
    href: string;
    status: 'complete' | 'current' | 'upcoming';
}

export enum InputState {
    generate = "Generate",
    ignore = "Ignore",
    provided = "Provide"
}

export enum SavingThrow{
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
}

export enum Skill {
    "acrobatics",
    "animal_handling",
    "arcana",
    "athletics",
    "deception",
    "history",
    "insight",
    "intimidation",
    "investigation",
    "medicine",
    "nature",
    "perception",
    "performance",
    "persuasion",
    "religion",
    "sleight_of_hand",
    "stealth",
    "survival"
}

export type WeaponEntry = {
    name: string;
    attack_bonus: number;
    damage: string;
}

export type CharacterDetails = {
    appearance: {
        age: Field<number>;
        height: Field<number>;
        weight: Field<number>;
        eyes: Field<string>;
        skin: Field<string>;
        hair: Field<string>;
        race: Field<string>;
    }
    personality_traits: Field<string>;
    ideals: Field<string>;
    bonds: Field<string>;
    flaws: Field<string>;
    character_name: Field<string>;
    class: Field<string>;
    level: Field<number>;
    background: Field<string>;
    alignment: Field<string>;
    profs_and_langs: Field<string>;
    features: Field<string>;
    allies_and_organizations: Field<string>;
    character_backstory: Field<string>;
    additional_features: Field<string>;
    treasure: Field<string>;
}

export type Skills = {
    stats: Stats;
    proficiencies: Field<(SavingThrow | Skill)>[];
    armor_class: Field<number>;
    initiative: Field<number>;
    speed: Field<number>;
    hit_points: Field<number>;
}

export type Stats = {
        strength: Field<number>;
        dexterity: Field<number>;
        constitution: Field<number>;
        intelligence: Field<number>;
        wisdom: Field<number>;
        charisma: Field<number>;
}

export type MoneyPouch = {
        cp: Field<number>;
        sp: Field<number>;
        ep: Field<number>;
        gp: Field<number>;
        pp: Field<number>;
}

export type CharacterSheet = {
    character_details: CharacterDetails,
    skills: Skills,
    attacks: {
        weapons: Field<WeaponEntry>[];
        spellcasting: Field<string>;
    }
    belongings: {
        money: MoneyPouch;
        equipment: Field<string>;
    }
}

export const emptyCharacterSheet = (): CharacterSheet => ({
    character_details: {
        appearance: {
            age: new Field<number>(),
            height: new Field<number>(),
            weight: new Field<number>(),
            eyes: new Field<string>(),
            skin: new Field<string>(),
            hair: new Field<string>(),
            race: new Field<string>(),
        },
        personality_traits: new Field<string>(),
        ideals: new Field<string>(),
        bonds: new Field<string>(),
        flaws: new Field<string>(),
        character_name: new Field<string>(),
        class: new Field<string>(),
        level: new Field<number>(),
        background: new Field<string>(),
        alignment: new Field<string>(),
        profs_and_langs: new Field<string>(),
        features: new Field<string>(),
        allies_and_organizations: new Field<string>(),
        character_backstory: new Field<string>(),
        additional_features: new Field<string>(),
        treasure: new Field<string>(),
    },
    skills: {
        stats: {
            strength: new Field<number>(),
            dexterity: new Field<number>(),
            constitution: new Field<number>(),
            intelligence: new Field<number>(),
            wisdom: new Field<number>(),
            charisma: new Field<number>(),
        },
        proficiencies: [],
        armor_class: new Field<number>(),
        initiative: new Field<number>(),
        speed: new Field<number>(),
        hit_points: new Field<number>(),
    },
    attacks: {
        weapons: [],
        spellcasting: new Field<string>(),
    },
    belongings: {
        money: {
            cp: new Field<number>(),
            sp: new Field<number>(),
            ep: new Field<number>(),
            gp: new Field<number>(),
            pp: new Field<number>(),
        },
        equipment: new Field<string>(),
    }
});

export class Field<T> {
    value?: T;
    state: InputState;
    
    constructor(value?: T, state: InputState = InputState.ignore){
        this.value = value;
        this.state = state;
    }


    setValue(value: T){
        this.value = value;
    }
    setState(state: InputState){
        this.state = state;
    }
}