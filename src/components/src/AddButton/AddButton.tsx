import React from "react";
import { IconButtonProps } from "@rjsf/utils";

const AddButton: React.ComponentType<IconButtonProps> = ({
  uiSchema,
  ...props
}) => {
  return (
      <button title="Add Item" {...props} className="m-3 inline-flex justify-center rounded-md border border-transparent bg-nsAdmin-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-nsAdmin-700 focus:outline-none focus:ring-2 focus:ring-nsAdmin-500 focus:ring-offset-2">
        Add
      </button>

  );
};

export default AddButton;
