import { WidgetProps } from "@rjsf/utils"

export const InputField = (props: WidgetProps) => {
    console.log('props', props)

    return (
        <div>
            <label htmlFor="input" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="input"
                    id={props.id}
                    className="block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e.target.value)}
                    value={props.value}
                    readOnly={props.readonly}
                    disabled={props.disabled}
                />
            </div>
            <p className="mt-2 text-sm text-gray-500">
                {props.schema.description ?? ''}
            </p>
        </div>
    )
}