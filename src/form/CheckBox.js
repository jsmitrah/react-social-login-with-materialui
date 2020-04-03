import React, { Fragment } from "react";
import ClassNames from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutline from "@material-ui/icons/HelpOutline";
import _uniqueId from "lodash/uniqueId";
import Typography from "@material-ui/core/Typography";

const CheckBox = ({
  input: { value, ...inputProps },
  labelPosition = "right",
  tooltipText,
  label,
  className,
  ...rest
}) => {
  let uniqueId = _uniqueId("InputField");
  const labelPositionClass = ClassNames("d-flex", {
    "flex-row-reverse justify-content-between": labelPosition === "left",
    [className]: !!className
  });
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...inputProps}
          id={uniqueId}
          checked={value ? true : false}
          onChange={inputProps.onChange}
          color="primary"
          {...rest}
        />
      }
      className={labelPositionClass}
      label={
        <Fragment>
          <Typography variant="body2" color="inherit">
            {label}
          </Typography>
          {tooltipText ? (
            <Tooltip
              id={uniqueId}
              title={<div dangerouslySetInnerHTML={{ __html: tooltipText }} />}
            >
              <HelpOutline className="ml-2" color="action" />
            </Tooltip>
          ) : null}
        </Fragment>
      }
    />
  );
};

export default CheckBox;
