import React from "react";
import Typography from "@material-ui/core/Typography";
import { DescriptionFieldProps } from "@rjsf/utils";

const DescriptionField = ({ id, description }: DescriptionFieldProps) => {
  if (description) {
    return (
      <p id={id} className="mt-2 text-sm text-gray-500">{description}</p>
    );
  }

  return null;
};

export default DescriptionField;
