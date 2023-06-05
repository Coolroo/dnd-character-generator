export enum Progress {
    about = "About",
    character = "Character Sheet",
    description = "Description",
    spells = "Spells",
    final = "Final"
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
    "animal handling",
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
    "sleight of hand",
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
        age?: number;
        height?: number;
        weight?: number;
        eyes?: string;
        skin?: string;
        hair?: string;
        race?: string;
    }
    personality_traits?: string;
    ideals?: string;
    bonds?: string;
    flaws?: string;
    character_name?: string;
    class?: string;
    level?: number;
    background?: string;
    alignment?: string;
    profs_and_langs?: string;
    features?: string;
    allies_and_organizations?: string;
    character_backstory?: string;
    additional_features?: string;
    treasure?: string;
}

export type Skills = {
    stats: Stats;
    proficiencies: (SavingThrow | Skill)[];
    armor_class?: number;
    initiative?: number;
    speed?: number;
    hit_points?: number;
}

export type Stats = {
        strength?: number;
        dexterity?: number;
        constitution?: number;
        intelligence?: number;
        wisdom?: number;
        charisma?: number;
}

export type MoneyPouch = {
        cp?: number;
        sp?: number;
        ep?: number;
        gp?: number;
        pp?: number;
}

export type pages = 'Info' | 'Equipment' | 'Character Details' | 'Skills' | 'Review & Finish';

export type ProgressBarStep = {
    id: number;
    name: pages;
    href: string;
    status: 'complete' | 'current' | 'upcoming';
}