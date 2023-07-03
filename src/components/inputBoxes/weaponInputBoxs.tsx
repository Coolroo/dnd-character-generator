import InputStateDropdown from "./InputStateDropdown";
import { InputState } from "@/types";

export interface WeaponInputBoxsProps<WeaponEntry>{
    label: string;
    placeholder: any;
    description: string;
    type: string;
    name: string;
    id: string;
    path: string;
    w_name?: string;
    w_ab?: number;
    w_damage?: string;
    inputState: InputState;
    setName: (value: string) => void;
    setAttackBonus: (value: number) => void;
    setDamage: (value: string) => void;
    setState: (value: string) => void;
}

export default function WeaponInputBoxs<WeaponEntry>({label, placeholder, description, name, id, inputState, w_name, w_ab, w_damage, setName, setAttackBonus, setDamage, setState}: WeaponInputBoxsProps<WeaponEntry>) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <InputStateDropdown inputState={inputState} onChange={(event) => {
                console.log(event.target.value as unknown as InputState);
                setState(event.target.value as unknown as InputState);
              }}/>
              <p className="mt-2 text-sm text-gray-500" id="email-description">
                {description}
              </p>
            </div>
        
      {inputState === InputState.provided ? (
        <div className="">
          <input
            type="string"
            name={name + "_name"}
            id={id}
            defaultValue={w_name ? w_name as unknown as string : ""}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder + " Name"}
            aria-describedby="email-description"
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
          <input
            type="number"
            name={name}
            id={id + "_ab"}
            defaultValue={w_ab ? w_ab as unknown as string : ""}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder + " Attack Bonus"}
            aria-describedby="email-description"
            onChange={(event) => {
              setAttackBonus(event.target.value as unknown as number)
            }}
          />
          <input
            type="string"
            name={name}
            id={id + "_damage"}
            defaultValue={w_damage ? w_damage as unknown as string : ""}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder + " Damage/Type"}
            aria-describedby="email-description"
            onChange={(event) => {
              setDamage(event.target.value)
            }}
          />
        </div>
      ) : (
        <div className="">
          <input
            type="string"
            name={name}
            id={id + "_name"}
            defaultValue={w_name ? w_name as unknown as string : ""}
            disabled
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder={placeholder + " Name"}
          />
          <input
            type="number"
            name={name}
            id={id + "_ab"}
            defaultValue={w_ab ? w_ab as unknown as string : ""}
            disabled
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 my-px "
            placeholder={placeholder + " Attack Bonus"}
          />
          <input
            type="string"
            name={name}
            id={id + "_damage"}
            defaultValue={w_damage ? w_damage as unknown as string : ""}
            disabled
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder={placeholder + " Damage/Type"}
          />
        </div>
    )}
    </div>
    </div>
    )
  }