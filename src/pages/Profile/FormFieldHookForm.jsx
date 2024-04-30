/* eslint-disable react/prop-types */
import { useFormContext, Controller } from "react-hook-form";
import Slider from '@mui/material/Slider';
import { useRenderCount } from "@uidotdev/usehooks";

const FormFieldHookForm = ({label,name, control,errors}) => {

  // const {control, formState: {errors}} = useFormContext();

  const renderCount = useRenderCount();

  const rules = name === "username"
  ? 
  { required: `${name} is required.`,
    validate: { notAdmin: fieldValue => fieldValue.toLowerCase() !== 'admin' || "Username 'admin' is not allowed" }
  }
  : { required: `${name} is required.` };

  return(
    <div>

      <h4>Field Render Count: {renderCount}</h4>
      <label className="form-label">{label}</label>
      {
        name === "age" 
        ?                
          <Controller
            name={name}
            control={control}
            defaultValue={0}
            render={({ field ,formState, errors, defaultValue, rules}) => (
              <Slider
                {...field}
                aria-labelledby="age-slider"
                valueLabelDisplay="auto"
                onChange={(event, value) => field.onChange(value)}
                min={0}
                max={100}
              />
            )}
            rules={{ 
              required: "Age is required", 
              min: { value: 0, message: "Age must be at least 0" }, 
              max: { value: 60, message: "Age must be at most 60" } 
            }}
          />        
        :        
          <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="text" className="form-input" />
            )}
            rules={rules}
          />
      }
      {/* {console.log(errors)} */}
      {errors[name] && <p className="error-message">{errors[name].message}</p>}
    </div>
  )
}

export default FormFieldHookForm;