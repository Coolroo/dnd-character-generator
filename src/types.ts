export enum Progress {
    about = "About",
    character = "Character Sheet",
    description = "Description",
    spells = "Spells",
    final = "Final"
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
    character_name?: string;
    class?: string;
    level?: number;
    background?: string;
    race?: string;
    alignment?: string;
    profs_and_langs?: string;
    features?: string;
    allies_and_organizations?: string;
    appearance?: string;
    symbol?: string;
    character_backstory?: string;
    additional_features?: string;
    treasure?: string;
}

export type Skills = {
    stats: {
        strength?: number;
        dexterity?: number;
        constitution?: number;
        intelligence?: number;
        wisdom?: number;
        charisma?: number;
    };
    proficiencies?: (SavingThrow | Skill)[];
    armor_class?: number;
    initiative?: number;
    speed?: number;
    hit_points?: number;
}