import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from 'final-form-focus';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../features/users/authenticateUserSlice';
import { Navigate } from 'react-router-dom';
import FormFieldFinalForm from "./FormFieldFinalForm";
import { useRenderCount } from "@uidotdev/usehooks";


const ProfileFinalForm = () => {

  const renderCount = useRenderCount();

  const dispatch = useDispatch();
  const { loadingToken, token, tokenError } = useSelector(state => state.userToken);

  const onSubmit = (formData) => {
    console.log("Form Data(Final Form): ", formData);
    dispatch(getToken(formData));
  };

  const onReset = (form) => {
    form.reset();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.toLowerCase() === 'admin') {
      errors.username = "Username 'admin' is not allowed";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const focusOnError = createDecorator();

  return (
    <div  className="profile-container">

      <h2>Render Counts(Final-Form): {renderCount}</h2>

      <Form 
        onSubmit={onSubmit}
        // decorators={[focusOnError]}
        validate={validate}
        initialValues={{username: "", password: ""}}
        subscription={{
          submitting: true
        }}
        render={({ handleSubmit, form , submitting, submitSuccessful , valid}) => (
          <form onSubmit={handleSubmit} autoComplete='off'>

            {/* <label>Username: </label>
            <Field name="username" component="input" placeholder="Username" /> */}

            {/* <label>Password: </label>
            <Field name="password" component="input" placeholder= "Password" /> */}

            {/* <FormFieldFinalForm name="firstName" label="First Name" type="text" placeholder="First Name"  />
            <FormFieldFInalForm name="middleName" label="Middle Name" type="text" placeholder="Middle Name"  />
            <FormFieldFinalForm name="lastName" label="Last Name" type="text" placeholder="Last Name"  /> */}
            <FormFieldFinalForm name="age" label="Age" type="number" placeholder="Age"  />

            <FormFieldFinalForm name="username" label="Username" type="text" placeholder="Enter Username" subscription={{
              active: true,
              value:true,
              error: true,
              touched:true
            }}/>

            <FormFieldFinalForm name="password" label="Password" type="password" placeholder="Enter Password"/>
            
            {/* <Field name="username" subscription={{
              value:true,
              active:true,
              error: true,
              touched:true
            }}>
              {({ input, meta }) => (
                <div>
                  <label className="form-label">Username</label>
                  <input {...input} type="text" placeholder="Enter Username" className="form-input" />
                  {meta.error && meta.touched && <p className="error-message">{meta.error}</p>}
                </div>
              )}
            </Field> */}

            {/* <Field name="password" >
              {({input, meta}) => (
                <div>
                  <label className="form-label">Password: </label>
                  <input {...input} type="password" placeholder="Enter Password" className="form-input"/>
                  {meta.error && meta.touched && <p className="error-message">{meta.error}</p>}
                </div>
              )}
            </Field> */}

            <button type="submit"  className="submit-btn">Login</button>
            <button type='button' onClick={() => onReset(form)} className="reset-btn">Reset</button>

            <FormSpy subscription={{values: true}} 
              // render={() => null}
              render={({ values }) => (
                <div>{JSON.stringify(values)}</div>
              )}
            />

          </form>
        )}
      />

      {loadingToken && <p>Loading...</p>}
      {tokenError && <p>Invalid Credentials</p>}
      {token && <Navigate to="/cities" />}
    </div>
  )
}

export default ProfileFinalForm;