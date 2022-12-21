import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { SubmitButtonProps, getSubmitButtonOptions } from "@rjsf/utils";

const SubmitButton: React.ComponentType<SubmitButtonProps> = (props) => {
  const {
    submitText,
    norender,
    props: submitButtonProps,
  } = getSubmitButtonOptions(props.uiSchema);
  if (norender) {
    return null;
  }
  return (
    <div className={'m-t-3'} >
        <button
            type={'submit'}
            className={'inline-flex justify-center rounded-md border border-transparent bg-nsAdmin-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-nsAdmin-700 focus:outline-none focus:ring-2 focus:ring-nsAdmin-500 focus:ring-offset-2'}
            {...submitButtonProps}
        >
            {submitText}
        </button>
    </div>
  );
};

export default SubmitButton;
