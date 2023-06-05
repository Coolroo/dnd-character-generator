import { InputState } from "@/types";
import { StateCreator } from "zustand";

export interface GenerationSettings {
    character_details: {
        appearance: {
            age: InputState;
            height: InputState;
            weight: InputState;
            eyes: InputState;
            skin: InputState;
            hair: InputState;
            race: InputState;
        };
        personality_traits: InputState;
        ideals: InputState;
        bonds: InputState;
        flaws: InputState;
        character_name: InputState;
        class: InputState;
        level: InputState;
        background: InputState;
        alignment: InputState;
        profs_and_langs: InputState;
        features: InputState;
        allies_and_organizations: InputState;
        character_backstory: InputState;
        additional_features: InputState;
        treasure: InputState;
    },
    skills: {
        stats: {
            strength: InputState;
            dexterity: InputState;
            constitution: InputState;
            intelligence: InputState;
            wisdom: InputState;
            charisma: InputState;
        };
        proficiencies: InputState;
        armor_class: InputState;
        initiative: InputState;
        speed: InputState;
        hit_points: InputState;
    },
    attacks: {
        weapons: InputState;
        spellcasting: InputState;
    },
    belongings: {
        money: {
            cp: InputState;
            sp: InputState;
            ep: InputState;
            gp: InputState;
            pp: InputState;
        };
        equipment: InputState;
    }
}

export const initialGenerationSettings: GenerationSettings = {
    character_details: {
        appearance: {
            age: InputState.ignore,
            height: InputState.ignore,
            weight: InputState.ignore,
            eyes: InputState.ignore,
            skin: InputState.ignore,
            hair: InputState.ignore,
            race: InputState.ignore
        },
        personality_traits: InputState.ignore,
        ideals: InputState.ignore,
        bonds: InputState.ignore,
        flaws: InputState.ignore,
        character_name: InputState.ignore,
        class: InputState.ignore,
        level: InputState.ignore,
        background: InputState.ignore,
        alignment: InputState.ignore,
        profs_and_langs: InputState.ignore,
        features: InputState.ignore,
        allies_and_organizations: InputState.ignore,
        character_backstory: InputState.ignore,
        additional_features: InputState.ignore,
        treasure: InputState.ignore,
    }, 
    skills: {
        stats: {
            strength: InputState.ignore,
            dexterity: InputState.ignore,
            constitution: InputState.ignore,
            intelligence: InputState.ignore,
            wisdom: InputState.ignore,
            charisma: InputState.ignore,
        },
        proficiencies: InputState.ignore,
        armor_class: InputState.ignore,
        initiative: InputState.ignore,
        speed: InputState.ignore,
        hit_points: InputState.ignore,
    },
    attacks: {
        weapons: InputState.ignore,
        spellcasting: InputState.ignore,
    },
    belongings: {
        money: {
            cp: InputState.ignore,
            sp: InputState.ignore,
            ep: InputState.ignore,
            gp: InputState.ignore,
            pp: InputState.ignore,
        },
        equipment: InputState.ignore,
    }
}

export interface GenerationSettingsSlice{
    generationSettings: GenerationSettings;
    updateSetting: (payload: {path: string, value: InputState}) => void;
    reset: () => void;
}

export type PathKey = keyof GenerationSettings | keyof GenerationSettings["character_details"] | keyof GenerationSettings["character_details"]["appearance"] | keyof GenerationSettings["skills"] | keyof GenerationSettings["skills"]["stats"] | keyof GenerationSettings["belongings"] | keyof GenerationSettings["belongings"]["money"];

export const createGenerationSettingsSlice: StateCreator<GenerationSettingsSlice> = (
    set,
    get
  ) => ({
    generationSettings: initialGenerationSettings,
    updateSetting: (payload) => {
      const pathArray = payload.path.split(".");
      const lastKey = pathArray.pop() as PathKey;
      let generationSettings = get().generationSettings;
      let lastObject: any = generationSettings;
  
      pathArray.forEach((key) => {
        lastObject = lastObject[key];
      });
  
      lastObject[lastKey] = payload.value;
      set({ generationSettings: { ...generationSettings } });
    },
    reset: () => {
        set({ generationSettings: initialGenerationSettings });
        }
  });