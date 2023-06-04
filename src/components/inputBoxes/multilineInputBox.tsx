import { CharacterDetails } from "@/types";
import { useState } from "react";
import { InputState } from "./inputBox";

export interface MultilineInput<T>{
    label: string;
    placeholder: string;
    description: string;
    name: string;
    id: string;
    value?: string;
    setDetails: (value: T) => void;
}

export default function MultilineInputBox<T>({label, placeholder, description, name, id, setDetails}: MultilineInput<T>){

    const [ mode, setMode ] = useState(InputState.ignore);

    return (
    <div>
        {mode === InputState.provided ?(
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
            </label>
            <div className="mt-2">
                <textarea
                id={id}
                name={name}
                rows={3}
                placeholder={placeholder}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
        </div>
        ) : (
            <div>
                <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
            </label>
            <div className="mt-2">
                <textarea
                id={id}
                name={name}
                rows={3}
                placeholder={placeholder}
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                defaultValue={''}
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
            </div>
        )}
        
  </div>
  )
}