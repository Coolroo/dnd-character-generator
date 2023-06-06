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
            age: emptyField(),
            height: emptyField(),
            weight: emptyField(),
            eyes: emptyField(),
            skin: emptyField(),
            hair: emptyField(),
            race: emptyField()
        },
        personality_traits: emptyField(),
        ideals: emptyField(),
        bonds: emptyField(),
        flaws: emptyField(),
        character_name: emptyField(),
        class: emptyField(),
        level: emptyField(),
        background: emptyField(),
        alignment: emptyField(),
        profs_and_langs: emptyField(),
        features: emptyField(),
        allies_and_organizations: emptyField(),
        character_backstory: emptyField(),
        additional_features: emptyField(),
        treasure: emptyField()
    },
    skills: {
        stats: {
            strength: emptyField(),
            dexterity: emptyField(),
            constitution: emptyField(),
            intelligence: emptyField(),
            wisdom: emptyField(),
            charisma: emptyField()
        },
        proficiencies: [],
        armor_class: emptyField(),
        initiative: emptyField(),
        speed: emptyField(),
        hit_points: emptyField()
    },
    attacks: {
        weapons: [],
        spellcasting: emptyField()
    },
    belongings: {
        money: {
            cp: emptyField(),
            sp: emptyField(),
            ep: emptyField(),
            gp: emptyField(),
            pp: emptyField()
        },
        equipment: emptyField()
    }
});


export type Field<T> = {
    value?: T;
    state: InputState;
}

export const emptyField = <T>(): Field<T> => ({
    value: undefined,
    state: InputState.ignore
});
  