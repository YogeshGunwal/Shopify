// import EmptyPage from "../EmptyPage";
import {useForm, useFieldArray, FormProvider, useWatch} from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from 'react';
import '../../styles/Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../features/users/authenticateUserSlice';
import { Navigate } from 'react-router-dom';
import FormFieldHookForm from './FormFieldHookForm';
import { useRenderCount } from '@uidotdev/usehooks';


export default function Profile() {
  
 let renderCount = useRenderCount();

  const dispatch = useDispatch();

  const {loadingToken, token, tokenError } = useSelector(state => state.userToken);

  const methods = useForm({
    defaultValues: {
      username: "",
      password: ""
    },
    mode: 'onTouched',
  });

  const { register, control , handleSubmit, formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful }, reset } = methods;

  // React Hook for subscribing to input changes.
  useWatch({control, name: 'password'});

  const onSubmit = (formData) => {
    console.log('Form submitted:', formData);
    dispatch(getToken(formData));
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  return (
    // <FormProvider {...methods}>
      <div className="profile-container">

      <h2>Render Counts(Hook-Form): {renderCount}</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>

        <FormFieldHookForm label="Age" name="age" control={control} errors={errors}/>

        <FormFieldHookForm label="Username" name="username" control={control} errors={errors} />

        <FormFieldHookForm label="Password" name="password" control={control} errors={errors} />

        {/* <label htmlFor="username" className="form-label">Username</label>
        <input type="text" id="username" {...register("username", {
          required: {
            value: true,
            message: "Username is required",
          },
          validate: {
            notAdmin: fieldValue => fieldValue.toLowerCase() !== 'admin' || "Username 'admin' is not allowed"
          }
        })} className="form-input" />

        {errors.username && <p className="error-message">{errors.username.message}</p>} */}

        {/* <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" {...register("password", {
          required: "Password is required"
        })} className="form-input" />

        {errors.password && <p className="error-message">{errors.password.message}</p>} */}

        <button disabled={!isDirty || !isValid || isSubmitting} className="submit-btn">Login</button>

        <button type='button' onClick={() => reset()} className="reset-btn">Reset</button>
      </form>

      {loadingToken && <p>Loading...</p>}
      {tokenError && <p>Invalid Credentials</p>}
      {token && <Navigate to="/cities" />}

      <DevTool control={control} />

      </div>
    // </FormProvider>
  );

  // const form = useForm({
  //   // defaultValues: async () => {
  //   //   // can request data from api too..
  //   //   return{
  //   //     username: "",
  //   //     password: ""
  //   //   }
  //   // },
  //   defaultValues: {
  //     username: "",
  //     password:"",
  //     phoneNumbers: [{number: ""}],
  //   },
  //   mode: 'onTouched',
  // });

  // const {register, control, handleSubmit, formState, watch, getValues, setValue, reset} = form;
  // // const { name, ref , onChange, onBlur} = register("username");
  // // const watchForm = watch("username");
  // const {errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount} = formState;

  // const {fields, append, remove} = useFieldArray({
  //   name: 'phoneNumbers',
  //   control
  // })

  // const onSubmit = (data) => {
  //   console.log('Form submitted:', data);
  // }

  // const onError = (errors) => {
  //   console.log("Form Errors:", errors);
  // }

  // const handleGetValues = () => {
  //   console.log("Get Values: ", getValues());
  // }

  // useEffect(() => {
  //   if(isSubmitSuccessful){
  //     reset();
  //   }
  // },[isSubmitSuccessful,reset])

  // return (
    
  //   <div>
  //     <form onSubmit={handleSubmit(onSubmit,onError)} noValidate>

  //       <label htmlFor="username">Username</label>        
  //       <input type="text" id="username" {...register("username" , {
  //         required: {
  //           value: true,
  //           message: "Username is required",
  //         },
  //         validate:{
  //           notAdmin: (fieldValue) => {
  //             return (
  //               fieldValue !== "admin" ||
  //               "Username 'admin' is not allowed"
  //             )
  //           }
  //         }
  //       })} />
  //       <p>{errors.username?.message}</p>

  //       <label htmlFor="password">Password</label>
  //       <input type="password" id="password" {...register("password",  {
  //         required: {
  //           value: true,
  //           message: "Password is required",
  //         },
  //         pattern:{

  //         },
  //       })} />
  //       <p>{errors.password?.message}</p>

  //       <div>
  //         <label >List Of Phone Numbers</label>
  //         <div>
  //           {
  //             fields.map((field,index) => {
  //               return(
  //                 <div key={field.id}>
  //                   <input type="text" 
  //                   {...register(`phoneNumbers.${index}.number`)}/>
  //                   {
  //                     index > 0 && <button type='button' onClick={() => remove(index)}>Remove</button>
  //                   }
  //                 </div>
  //               );
  //             })
  //           }
  //           <button type='button' onClick={() => append({number: ""})}> Add Phone Number </button>
  //         </div>
  //       </div>

  //       <button disabled = {!isDirty || !isValid || isSubmitting}> Login </button>
  //       <button onClick={()=> reset()}>Reset</button>
  //       <button onClick={handleGetValues}>GetValues</button>
  //     </form>

  //     <DevTool control={control} />
  //   </div>    
    
  // );
}
