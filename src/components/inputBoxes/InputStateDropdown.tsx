import { InputState } from "@/types";

interface InputStateProps {
    inputState: InputState;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function InputDropdown({inputState, onChange}: InputStateProps) {
    return (
      <div>
        <select onChange={onChange}
          id="location"
          name="location"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={inputState}
        >
          <option>Generate</option>
          <option>Ignore</option>
          <option>Provide</option>
        </select>
      </div>
    )
  }
  