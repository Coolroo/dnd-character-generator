import InputStateDropdown from "./InputStateDropdown";
import { Field, InputState } from "@/types";

export interface InputBoxProps<T>{
    label: string;
    placeholder: any;
    description: string;
    type: string;
    name: string;
    id: string;
    path: string;
    value: Field<T>;
}
export default function InputBox<T>({label, placeholder, description, type, name, id, value}: InputBoxProps<T>) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="grid grid-cols-2">
            <InputStateDropdown inputState={value.state} onChange={(event) => {
              value.setState(event.target.value as unknown as InputState)
            }}/>
      {value.state === InputState.provided ? (
        <div className="mt-2">
          <input
            type={type}
            name={name}
            id={id}
            defaultValue={value.value ? value.value as unknown as string : ""}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby="email-description"
            onChange={(event) => {
              value.setValue(event.target.value as unknown as T)
            }}
          />
        </div>
      ) : (
        <div className="mt-2">
          <input
            type={type}
            name={name}
            id={id}
            defaultValue={value.value ? value.value as unknown as string : ""}
            disabled
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
    )}
    </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        {description}
      </p>
    </div>
    )
  }