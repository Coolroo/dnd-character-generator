import { CharacterDetails } from "@/types";
import { useState } from "react";

export interface InputBoxProps<T>{
    label: string;
    placeholder: any;
    description: string;
    type: string;
    name: string;
    id: string;
    value?: any;
    setDetails: (value: T) => void;
}

export enum InputState {
    "generate",
    "ignore",
    "provided"
}

export default function InputBox<T>({label, placeholder, description, type, name, id, value, setDetails}: InputBoxProps<T>) {

    const [ mode, setMode ] = useState(InputState.ignore);
    return (
      <div>
      {mode === InputState.provided ? (
        <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            type={type}
            name={name}
            id={id}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby="email-description"
          />
        </div>
        <p className="mt-2 text-sm text-gray-500" id="email-description">
            {description}
        </p>
        </div>
      ) : (
        <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={id}
          defaultValue={value}
          disabled
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
          {description}
      </p>
      </div>
    )}
    </div>
    )
  }