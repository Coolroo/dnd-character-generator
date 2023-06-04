'use client'
import InputBox from '@/components/inputBoxes/inputBox';
import MultilineInputBox from '@/components/inputBoxes/multilineInputBox';
import { useAppStore } from '@/lib/store';
import { CharacterDetails } from '@/types';
import React, { useEffect, useState } from 'react'

export default function CharacterDetails() {

    const [details, setDetails] = useState({} as CharacterDetails);

    const applicationStore = useAppStore();

    useEffect(() => {
        setDetails(applicationStore.character.character_details);
    }, [])

    const onSubmit = (event: Event) => {
        event.preventDefault()
    };


  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Basic Info</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            The basic info for this character which usually is at the top of the character sheet.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
                <InputBox<string> label="Character Name" placeholder="Character Name" description="The name of the character" type="text" name="characterName" id="characterName" value={details.character_name} setDetails={(value: string) => {setDetails({
                    ...details,
                    character_name: value
                })}}/>
            </div>
          

            <div className="sm:col-span-4">
                <InputBox<string> label="Class" placeholder="Class" description="The class of the character" type="text" name="class" id="class" value={details.class} setDetails={(value: string) => {setDetails({
                    ...details,
                    class: value
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Level" placeholder="Level" description="The level of the character" type="number" name="level" id="level" value={details.level} setDetails={(value: number) => {setDetails({
                    ...details,
                    level: value
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Background" placeholder="Background" description="The background of the character" type="text" name="background" id="background" value={details.background} setDetails={(value: string) => {setDetails({
                    ...details,
                    background: value
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Race" placeholder="Race" description="The race of the character" type="text" name="race" id="race" value={details.appearance?.race} setDetails={(value: string) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        race: value
                    }
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Alignment" placeholder="Alignment" description="The alignment of the character" type="text" name="alignment" id="alignment" value={details.alignment} setDetails={(value: string) => {setDetails({
                    ...details,
                    alignment: value
                })}}/>
            </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Background & Features</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Background information and features of the character.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-4">
                <InputBox<number> label="Age" placeholder="Age" description="The age of the character" type="number" name="age" id="age" value={details.appearance?.age} setDetails={(value: number) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        age: value
                    }
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Height" placeholder="Height" description="The height of the character" type="number" name="height" id="height" value={details.appearance?.height} setDetails={(value: number) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        height: value
                    }
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<number> label="Weight" placeholder="Weight" description="The weight of the character" type="number" name="weight" id="weight" value={details.appearance?.weight} setDetails={(value: number) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        weight: value
                    }
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Eyes" placeholder="Eyes" description="The eye color of the character" type="text" name="eyes" id="eyes" value={details.appearance?.eyes} setDetails={(value: string) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        eyes: value
                    }
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Skin" placeholder="Skin" description="The skin color of the character" type="text" name="skin" id="skin" value={details.appearance?.skin} setDetails={(value: string) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        skin: value
                    }
                })}}/>
            </div>

            <div className="sm:col-span-4">
                <InputBox<string> label="Hair" placeholder="Hair" description="The hair color of the character" type="text" name="hair" id="hair" value={details.appearance?.hair} setDetails={(value: string) => {setDetails({
                    ...details,
                    appearance: {
                        ...details.appearance,
                        hair: value
                    }
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Personality Traits" placeholder="Personality Traits" description="The personality traits of the character" name="personalityTraits" id="personalityTraits" value={details.personality_traits} setDetails={(value: string) => {setDetails({
                    ...details,
                    personality_traits: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Ideals" placeholder="Ideals" description="The ideals of the character" name="ideals" id="ideals" value={details.ideals} setDetails={(value: string) => {setDetails({
                    ...details,
                    ideals: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Bonds" placeholder="Bonds" description="The bonds of the character" name="bonds" id="bonds" value={details.bonds} setDetails={(value: string) => {setDetails({
                    ...details,
                    bonds: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Flaws" placeholder="Flaws" description="The flaws of the character" name="flaws" id="flaws" value={details.flaws} setDetails={(value: string) => {setDetails({
                    ...details,
                    flaws: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Features & Traits" placeholder="Features & Traits" description="The features and traits of the character" name="featuresAndTraits" id="featuresAndTraits" value={details.features} setDetails={(value: string) => {setDetails({
                    ...details,
                    features: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Backstory" placeholder="Backstory" description="The backstory of the character" name="backstory" id="backstory" value={details.character_backstory} setDetails={(value: string) => {setDetails({
                    ...details,
                    character_backstory: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Allies & Organizations" placeholder="Allies & Organizations" description="The allies and organizations of the character" name="alliesAndOrganizations" id="alliesAndOrganizations" value={details.allies_and_organizations} setDetails={(value: string) => {setDetails({
                    ...details,
                    allies_and_organizations: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Additional Features & Traits" placeholder="Additional Features & Traits" description="The additional features and traits of the character" name="additionalFeaturesAndTraits" id="additionalFeaturesAndTraits" value={details.additional_features} setDetails={(value: string) => {setDetails({
                    ...details,
                    additional_features: value
                })}}/>
            </div>

            <div className="col-span-full">
                <MultilineInputBox<string> label="Treasure" placeholder="Treasure" description="The treasure of the character" name="treasure" id="treasure" value={details.treasure} setDetails={(value: string) => {setDetails({
                    ...details,
                    treasure: value
                })}}/>
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
