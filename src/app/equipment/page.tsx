'use client'
import InputBox from '@/components/inputBoxes/inputBox';
import WeaponInputBoxs from '@/components/inputBoxes/weaponInputBoxs';
import MultilineInputBox from '@/components/inputBoxes/multilineInputBox';
import { useCharacterSheetStore, useProgressStore } from '@/lib/store';
import { WeaponEntry, MoneyPouch, Field, emptyCharacterSheet } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const PAGE_ID = 4;

export default function EquipmentPage() {
    
  const [character, setCharacter] = useState(emptyCharacterSheet());
  const setWeapons = useCharacterSheetStore((state) => state.setWeapons);
  const setSpellcasting = useCharacterSheetStore((state) => state.setSpellcasting);
  const setMoney = useCharacterSheetStore((state) => state.setMoney);
  const setEquipment = useCharacterSheetStore((state) => state.setEquipment);
  const router = useRouter();
  const setPageStatus = useProgressStore((state) => state.setPageStatus);
  const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
  const persistedCharacter = useCharacterSheetStore(state => state.character);

  useEffect(() => {
      setCurrentPage(PAGE_ID);
      console.log(persistedCharacter);
      setCharacter(persistedCharacter);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPageStatus(PAGE_ID, 'complete');

    setWeapons(character.attacks.weapons);
    setSpellcasting(character.attacks.spellcasting);
    setMoney(character.belongings.money);
    setEquipment(character.belongings.equipment);
  }

  return <form onSubmit={handleSubmit}>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Attacks</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Description.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* <div className="sm:col-span-4">
            <WeaponInputBoxs<WeaponEntry> label="Weapon 1" placeholder="Weapon 1" description="The first weapon your character has" type="WeaponEntry" name="weapon1" id="weapon1" path="weapon1"
              w_name={character.attacks.weapons[0]?.value?.name}
              w_ab={character.attacks.weapons[0]?.value?.attack_bonus}
              w_damage={character.attacks.weapons[0]?.value?.damage}
              inputState={character.attacks.weapons[0]?.state}
              setName={() => setWeapons([
                {} as Field<WeaponEntry>,
                character.attacks.weapons[1] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
                character.attacks.weapons[2] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
              ])}
              setAttackBonus={() => setWeapons([
                {} as Field<WeaponEntry>,
                character.attacks.weapons[1] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
                character.attacks.weapons[2] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
              ])}
              setDamage={() => setWeapons([
                {} as Field<WeaponEntry>,
                character.attacks.weapons[1] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
                character.attacks.weapons[2] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
              ])}
              setState={() => setWeapons([
                {} as Field<WeaponEntry>,
                character.attacks.weapons[1] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
                character.attacks.weapons[2] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
              ])}
            />
          </div>
          
          <div className="sm:col-span-4">
            <WeaponInputBoxs<WeaponEntry> label="Weapon 2" placeholder="Weapon 2" description="The second weapon your character has" type="WeaponEntry" name="weapon2" id="weapon2" path="dexterity" value={character.attacks.weapons[1]?.value} inputState={character.attacks.weapons[1]?.state} setValue={(val: Field<WeaponEntry> ) => setCharacter({...character, attacks: {
              ...character.attacks,
              weapons: [
                character.attacks.weapons[0] ? character.attacks.weapons[0] : {} as Field<WeaponEntry>,
                val,
                character.attacks.weapons[2] ? character.attacks.weapons[2] : {} as Field<WeaponEntry>,
              ]
            } })}/>
          </div>
          
          <div className="sm:col-span-4">
            <WeaponInputBoxs<WeaponEntry> label="Weapon 3" placeholder="Weapon 3" description="The third weapon your character has" type="WeaponEntry" name="weapon3" id="weapon3" path="attacks.constitution" value={character.attacks.weapons[2]?.value} inputState={character.attacks.weapons[3]?.state} setValue={(val: Field<WeaponEntry> ) => setCharacter({...character, attacks: {
              ...character.attacks,
              weapons: [
                character.attacks.weapons[0] ? character.attacks.weapons[0] : {} as Field<WeaponEntry>,
                character.attacks.weapons[1] ? character.attacks.weapons[1] : {} as Field<WeaponEntry>,
                val,
              ]
            } })}/>
          </div> */}
          
          <div className="col-span-full">
            <MultilineInputBox<string> label="Spell Casting" placeholder="Spell Casting" description="The spells the character knows" name="spellcasting" id="attacks.spellcasting" value={character.attacks.spellcasting.value} inputState={character.attacks.spellcasting.state} setValue={(val: Field<string> ) => setCharacter({...character, attacks: {
              ...character.attacks,
              spellcasting: val
            } })} />
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Belongings</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Description.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <InputBox<number> label="CP" placeholder="CP" description="The amount of CP the character has" type="number" name="cp" id="cp" path="belongings.money.cp" value={character.belongings.money.cp.value} inputState={character.belongings.money.cp.state} setValue={(val: Field<number> ) => setCharacter({...character, belongings: {
              ...character.belongings,
              money: {
                ...character.belongings.money,
                cp: val
              }
            } })}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="SP" placeholder="SP" description="The amount of CP the character has" type="number" name="sp" id="sp" path="belongings.money.sp" value={character.belongings.money.sp.value} inputState={character.belongings.money.sp.state} setValue={(val: Field<number> ) => setCharacter({...character, belongings:{
              ...character.belongings,
              money: {
                ...character.belongings.money,
                sp: val
              }
            } })}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="EP" placeholder="EP" description="The amount of EP the character has" type="number" name="ep" id="ep" path="belongings.money.ep" value={character.belongings.money.ep.value} inputState={character.belongings.money.ep.state} setValue={(val: Field<number> ) => setCharacter({...character, belongings:{
              ...character.belongings,
              money: {
                ...character.belongings.money,
                ep: val
              }
            } })}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="GP" placeholder="GP" description="The amount of GP the character has" type="number" name="gp" id="gp" path="belongings.money.gp" value={character.belongings.money.gp.value} inputState={character.belongings.money.gp.state} setValue={(val: Field<number> ) => setCharacter({...character, belongings:{
              ...character.belongings,
              money: {
                ...character.belongings.money,
                gp: val
              }
            } })}/>
          </div>
          
          <div className="sm:col-span-4">
            <InputBox<number> label="PP" placeholder="PP" description="The amount of PP the character has" type="number" name="pp" id="pp" path="belongings.money.pp" value={character.belongings.money.pp.value} inputState={character.belongings.money.pp.state} setValue={(val: Field<number> ) => setCharacter({...character, belongings:{
              ...character.belongings,
              money: {
                ...character.belongings.money,
                pp: val
              }
            } })}/>
          </div>
          
          <div className="col-span-full">
            <MultilineInputBox<string> label="Equipment" placeholder="Equipment" description="The equipment the character has" name="equipment" id="belongings.equipment" value={character.belongings.equipment.value} inputState={character.belongings.equipment.state} setValue={(val: Field<string> ) => setCharacter({...character, belongings: {
              ...character.belongings,
              equipment: val
            } })} />
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