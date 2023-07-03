'use client'
import InputBox from '@/components/inputBoxes/inputBox';
import MultilineInputBox from '@/components/inputBoxes/multilineInputBox';
import { useCharacterSheetStore, useProgressStore } from '@/lib/store';
import { CharacterDetails, Field, emptyCharacterSheet } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Router from "next/router";

const PAGE_ID = 2;

export default function CharacterDetailsPage() {
    console.log("reload")

    const [character, setCharacter] = useState(emptyCharacterSheet().character_details as CharacterDetails);
    const setCharacterDetails = useCharacterSheetStore((state) => state.setCharacterDetails);
    const router = useRouter();
    const setPageStatus = useProgressStore((state) => state.setPageStatus);
    const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
    const persistedCharacter = useCharacterSheetStore(state => state.character.character_details);

    useEffect(() => {
        setCurrentPage(PAGE_ID);
        console.log(persistedCharacter);
        setCharacter(persistedCharacter)
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPageStatus(PAGE_ID, 'complete');
        setCharacterDetails(character);
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Basic Info</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            The basic info for this character which usually is at the top of the character sheet.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
                <InputBox<string> label="Character Name" placeholder="Character Name" description="The name of the character" type="text" name="characterName" id="characterName" path="character_name" value={character.character_name.value} inputState={character.character_name.state} setValue={(val: Field<string> ) => 
                    {
                        console.log(persistedCharacter);
                        return setCharacter({...character, character_name:  val})
                    }
                }/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Class" placeholder="Class" description="The class of the character" type="text" name="class" id="class" path="class" value={character.class.value} inputState={character.class.state} setValue={(val: Field<string>) => setCharacter({...character, class: val})}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Level" placeholder="Level" description="The level of the character" type="number" name="level" id="level" path="level" value={character.level.value} inputState={character.level.state} setValue={(val: Field<number> ) => setCharacter({...character, level: val})}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Background" placeholder="Background" description="The background of the character" type="text" name="background" id="background" path="background" value={character.background.value} inputState={character.background.state} setValue={(val: Field<string> ) => setCharacter({...character, background: val})} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Race" placeholder="Race" description="The race of the character" type="text" name="race" id="race" path="appearance.race" value={character.appearance?.race.value} inputState={character.appearance?.race.state} setValue={(val: Field<string> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    race: val
                } })} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Alignment" placeholder="Alignment" description="The alignment of the character" type="text" name="alignment" id="alignment" path="alignment" value={character.alignment.value} inputState={character.alignment.state} setValue={(val: Field<string> ) => setCharacter({...character, alignment: val})}/>
            </div>
        </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Background & Features</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
            Background information, appearance, and features of the character.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-4">
                <InputBox<number> label="Age" placeholder="Age" description="The age of the character" type="number" name="age" id="age" path="appearance.age" value={character.appearance?.age.value} inputState={character.appearance?.age.state} setValue={(val: Field<number> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    age: val
                } })} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Height" placeholder="Height" description="The height of the character" type="number" name="height" id="height" path="appearance.height" value={character.appearance?.height.value} inputState={character.appearance?.height.state} setValue={(val: Field<number> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    height: val
                } })} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Weight" placeholder="Weight" description="The weight of the character" type="number" name="weight" id="weight" path="appearance.weight" value={character.appearance?.weight.value} inputState={character.appearance?.weight.state} setValue={(val: Field<number> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    weight: val
                } })} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Eyes" placeholder="Eyes" description="The eye color of the character" type="text" name="eyes" id="eyes" path="appearance.eyes" value={character.appearance?.eyes.value} inputState={character.appearance?.eyes.state} setValue={(val: Field<string> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    eyes: val
                } })}  />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Skin" placeholder="Skin" description="The skin color of the character" type="text" name="skin" id="skin" path="appearance.skin" value={character.appearance?.skin.value} inputState={character.appearance?.skin.state} setValue={(val: Field<string> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    skin: val
                } })} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Hair" placeholder="Hair" description="The hair color of the character" type="text" name="hair" id="hair" path="appearance.hair" value={character.appearance?.hair.value} inputState={character.appearance?.hair.state} setValue={(val: Field<string> ) => setCharacter({...character, appearance: {
                    ...character.appearance,
                    hair: val
                } })} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Personality Traits" placeholder="Personality Traits" description="The personality traits of the character" name="personalityTraits" id="personalityTraits" value={character.personality_traits.value} inputState={character.personality_traits.state} setValue={(val: Field<string> ) => setCharacter({...character, personality_traits: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Bonds" placeholder="Bonds" description="The bonds of the character" name="bonds" id="bonds" value={character.bonds.value} inputState={character.bonds.state} setValue={(val: Field<string> ) => setCharacter({...character, bonds: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Flaws" placeholder="Flaws" description="The flaws of the character" name="flaws" id="flaws" value={character.flaws.value} inputState={character.flaws.state} setValue={(val: Field<string> ) => setCharacter({...character, flaws: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Features & Traits" placeholder="Features & Traits" description="The features and traits of the character" name="featuresAndTraits" id="featuresAndTraits" value={character.features.value} inputState={character.features.state} setValue={(val: Field<string> ) => setCharacter({...character, features: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Backstory" placeholder="Backstory" description="The backstory of the character" name="backstory" id="backstory" value={character.character_backstory.value} inputState={character.character_backstory.state} setValue={(val: Field<string> ) => setCharacter({...character, character_backstory: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Allies & Organizations" placeholder="Allies & Organizations" description="The allies and organizations of the character" name="alliesAndOrganizations" id="alliesAndOrganizations" value={character.allies_and_organizations.value} inputState={character.allies_and_organizations.state} setValue={(val: Field<string> ) => setCharacter({...character, allies_and_organizations: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Additional Features & Traits" placeholder="Additional Features & Traits" description="The additional features and traits of the character" name="additionalFeaturesAndTraits" id="additionalFeaturesAndTraits" value={character.additional_features.value} inputState={character.additional_features.state} setValue={(val: Field<string> ) => setCharacter({...character, additional_features: val})} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Treasure" placeholder="Treasure" description="The treasure of the character" name="treasure" id="treasure" value={character.treasure.value} inputState={character.treasure.state} setValue={(val: Field<string> ) => setCharacter({...character, treasure: val})} />
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
    )
}
