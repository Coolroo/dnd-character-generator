import InputStateDropdown from "./InputStateDropdown";
import {Field, InputState } from "@/types";

export interface InputBoxProps<T>{
    label: string;
    placeholder: any;
    description: string;
    type: string;
    name: string;
    id: string;
    path: string;
    value?: T;
    inputState: InputState;
    setValue: (value: Field<T>) => void;

}
export default function InputBox<T>({label, placeholder, description, type, name, id, inputState, value, setValue}: InputBoxProps<T>) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <InputStateDropdown inputState={inputState} onChange={(event) => {
              console.log(event.target.value as unknown as InputState);
                setValue({state: event.target.value as unknown as InputState, value: value})
              
            }}/>
              <p className="mt-2 text-sm text-gray-500" id="email-description">
                {description}
              </p>
            </div>
        
      {inputState === InputState.provided ? (
        <div className="">
          <input
            type={type}
            name={name}
            id={id}
            defaultValue={value ? value as unknown as string : ""}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby="email-description"
            onChange={(event) => {
              setValue({state: inputState, value: event.target.value as unknown as T})
            }}
          />
        </div>
      ) : (
        <div className="">
          <input
            type={type}
            name={name}
            id={id}
            defaultValue={value ? value as unknown as string : ""}
            disabled
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
    )}
    </div>
    </div>
    )
  }