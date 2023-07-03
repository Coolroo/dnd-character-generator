'use client'
import InputBox from '@/components/inputBoxes/inputBox';
import MultilineInputBox from '@/components/inputBoxes/multilineInputBox';
import { useCharacterSheetStore, useProgressStore } from '@/lib/store';
import { Skills, Field, emptyCharacterSheet, Skill, SavingThrow } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PAGE_ID = 3;

export default function SkillsPage(){

  const [character, setCharacter] = useState(emptyCharacterSheet().skills as Skills);
  const setSkills = useCharacterSheetStore((state) => state.setSkills);
  const router = useRouter();
  const setPageStatus = useProgressStore((state) => state.setPageStatus);
  const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
  const persistedCharacter = useCharacterSheetStore(state => state.character.skills)
  
  useEffect(() => {
      setCurrentPage(PAGE_ID);
      setCharacter(persistedCharacter);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPageStatus(PAGE_ID, 'complete');
    setSkills(character);
  }

  return <form onSubmit={handleSubmit}>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Stats</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Description.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <InputBox<number> label="Strength" placeholder="Strength" description="The strength of the character" type="number" name="strength" id="strength" path="stats.strength" value={character.stats.strength.value} inputState={character.stats.strength.state} setValue={(val: Field<number> ) => setCharacter({...character, stats: {...character.stats, strength:  val}})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Dexterity" placeholder="Dexterity" description="The dexterity of the character" type="number" name="dexterity" id="dexterity" path="statsdexterity" value={character.stats.dexterity.value} inputState={character.stats.dexterity.state} setValue={(val: Field<number> ) => setCharacter({...character, stats:{...character.stats, dexterity:  val}})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Constitution" placeholder="Constitution" description="The constitution of the character" type="number" name="constitution" id="statsconstitution" path="stats.constitution" value={character.stats.constitution.value} inputState={character.stats.constitution.state} setValue={(val: Field<number> ) => setCharacter({...character, stats:{...character.stats, constitution:  val}})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Intelligence" placeholder="Intelligence" description="The intelligence of the character" type="number" name="intelligence" id="statsintelligence" path="stats.intelligence" value={character.stats.intelligence.value} inputState={character.stats.intelligence.state} setValue={(val: Field<number> ) => setCharacter({...character, stats:{...character.stats, intelligence:  val}})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Wisdom" placeholder="Wisdom" description="The wisdom of the character" type="number" name="wisdom" id="wisdom" path="stats.wisdom" value={character.stats.wisdom.value} inputState={character.stats.wisdom.state} setValue={(val: Field<number> ) => setCharacter({...character, stats:{...character.stats, wisdom:  val}})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Charisma" placeholder="Charisma" description="The charisma of the character" type="number" name="charisma" id="charisma" path="stats.charisma" value={character.stats.charisma.value} inputState={character.stats.charisma.state} setValue={(val: Field<number> ) => setCharacter({...character, stats:{...character.stats, charisma:  val}})}/>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Skills</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
        Description.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* <div className="sm:col-span-4">
              <InputBox<SavingThrow | Skill> label="Proficiencies" placeholder="Proficiencies" description="The proficiencies of the character" type="text" name="proficiencies" id="proficiencies" path="proficiencies" value={character.proficiencies?.value} inputState={character.proficiencies} setValue={(val: Field<SavingThrow | Skill> ) => setCharacter({...character, proficiencies:  val})}/>
          </div>
           */}
          <div className="sm:col-span-4">
            <InputBox<number> label="Armor Class" placeholder="Armor Class" description="The armor class of the character" type="text" name="armor_class" id="armor_class" path="armor_class" value={character.armor_class.value} inputState={character.armor_class.state} setValue={(val: Field<number> ) => setCharacter({...character, armor_class: val})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Initiative" placeholder="Initiative" description="The initiative of the character" type="text" name="initiative" id="initiative" path="initiative" value={character.initiative.value} inputState={character.initiative.state} setValue={(val: Field<number> ) => setCharacter({...character, initiative: val})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Speed" placeholder="Speed" description="The speed of the character" type="text" name="speed" id="speed" path="speed" value={character.speed.value} inputState={character.speed.state} setValue={(val: Field<number> ) => setCharacter({...character, speed: val})}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="Hit Points" placeholder="Hit Points" description="The hit points of the character" type="text" name="hit_points" id="hit_points" path="hit_points" value={character.hit_points.value} inputState={character.hit_points.state} setValue={(val: Field<number> ) => setCharacter({...character, hit_points: val})}/>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  </form>
}