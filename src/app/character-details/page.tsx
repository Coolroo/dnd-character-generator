'use client'
import InputBox from '@/components/inputBoxes/inputBox';
import MultilineInputBox from '@/components/inputBoxes/multilineInputBox';
import { useCharacterSheetStore, useProgressStore } from '@/lib/store';
import { CharacterDetails } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useLayoutEffect } from 'react'

const PAGE_ID = 2;

export default function CharacterDetails() {

    const character = useCharacterSheetStore((state) => state.character)
    const setCharacter = useCharacterSheetStore((state) => state.setData);
    const setCharacterDetails = useCharacterSheetStore((state) => state.setCharacterDetails);
    const router = useRouter();
    const setPageStatus = useProgressStore((state) => state.setPageStatus);
    const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
    
    useEffect(() => {
        setCurrentPage(PAGE_ID);
    }, [router]);

    useEffect(() => {
        localStorage.setItem('characterData', JSON.stringify(character));
    }, [character]);

    const details = useCharacterSheetStore((state) => state.character.character_details);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPageStatus(PAGE_ID, 'complete');
        setCharacterDetails(details);
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
                <InputBox<string> label="Character Name" placeholder="Character Name" description="The name of the character" type="text" name="characterName" id="characterName" path="character_name" value={details.character_name}/>
            </div>
          

            <div className="sm:col-span-4">
                <InputBox<string> label="Class" placeholder="Class" description="The class of the character" type="text" name="class" id="class" path="class" value={details.class}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Level" placeholder="Level" description="The level of the character" type="number" name="level" id="level" path="level" value={details.level} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Background" placeholder="Background" description="The background of the character" type="text" name="background" id="background" path="background" value={details.background} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Race" placeholder="Race" description="The race of the character" type="text" name="race" id="race" path="appearance.race" value={details.appearance?.race} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Alignment" placeholder="Alignment" description="The alignment of the character" type="text" name="alignment" id="alignment" path="alignment" value={details.alignment} />
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
                <InputBox<number> label="Age" placeholder="Age" description="The age of the character" type="number" name="age" id="age" path="appearance.age" value={details.appearance?.age} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Height" placeholder="Height" description="The height of the character" type="number" name="height" id="height" path="appearance.height" value={details.appearance?.height} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Weight" placeholder="Weight" description="The weight of the character" type="number" name="weight" id="weight" path="appearance.weight" value={details.appearance?.weight} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Eyes" placeholder="Eyes" description="The eye color of the character" type="text" name="eyes" id="eyes" path="appearance.eyes" value={details.appearance?.eyes} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Skin" placeholder="Skin" description="The skin color of the character" type="text" name="skin" id="skin" path="appearance.skin" value={details.appearance?.skin} />
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Hair" placeholder="Hair" description="The hair color of the character" type="text" name="hair" id="hair" path="appearance.hair" value={details.appearance?.hair} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Personality Traits" placeholder="Personality Traits" description="The personality traits of the character" name="personalityTraits" id="personalityTraits" path="personality_traits" value={details.personality_traits} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Bonds" placeholder="Bonds" description="The bonds of the character" name="bonds" id="bonds" path="bonds" value={details.bonds} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Flaws" placeholder="Flaws" description="The flaws of the character" name="flaws" id="flaws" path="flaws" value={details.flaws} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Features & Traits" placeholder="Features & Traits" description="The features and traits of the character" name="featuresAndTraits" id="featuresAndTraits" path="features" value={details.features} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Backstory" placeholder="Backstory" description="The backstory of the character" name="backstory" id="backstory" path="character_backstory" value={details.character_backstory} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Allies & Organizations" placeholder="Allies & Organizations" description="The allies and organizations of the character" name="alliesAndOrganizations" id="alliesAndOrganizations" path="allies_and_organizations" value={details.allies_and_organizations} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Additional Features & Traits" placeholder="Additional Features & Traits" description="The additional features and traits of the character" name="additionalFeaturesAndTraits" id="additionalFeaturesAndTraits" path="additional_features" value={details.additional_features} />
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Treasure" placeholder="Treasure" description="The treasure of the character" name="treasure" id="treasure" path="treasure" value={details.treasure} />
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
