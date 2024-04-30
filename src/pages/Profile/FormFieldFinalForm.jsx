/* eslint-disable react/prop-types */
import { Field } from "react-final-form";
import Typography from "@mui/material/Typography";
import Slider from '@mui/material/Slider';
import { useRenderCount } from "@uidotdev/usehooks";

const validateAge = (value) => {
  if (!value && value !== 0) {
    return "Age is required";
  }
  if (value < 0 || value > 80) {
    return "Age must be between 0 and 80";
  }
  return undefined; 
};

const FormFieldFinalForm = ({
  label,
  type,
  name, 
  placeholder,
  subscription = undefined
}) => {

  const fieldRender = useRenderCount();

  return <div>

    <h4>Field Render Count: {fieldRender}</h4>

    <Field name={name} placeholder={placeholder} subscription={subscription}  validate={name === "age" ? validateAge : undefined}>
      {({ input, meta , placeholder }) => (
        
        <div>
          <label className="form-label">{label}</label>

          { name === "age" 
            ?          
              <Slider
                {...input}
                value={Number(input.value)}
                aria-labelledby="age-slider"
                valueLabelDisplay="auto"
                onChange={(event, value) => input.onChange(value)}
                min={0}
                max={100}
              />
            :  <input {...input} type={type} placeholder={placeholder} className="form-input" />}

            {meta.error && meta.touched && <p className="error-message">{meta.error}</p>
          }
        </div>
      )}
    </Field>
  </div>
}

export default FormFieldFinalForm;