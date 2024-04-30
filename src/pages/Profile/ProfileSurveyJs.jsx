import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../features/users/authenticateUserSlice';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "UserName",
      type: "text",
      validators: [
        {
          type: "text",
          text: "Username is required"
        },
      ]
    },
    {
      name: "LastName",
      title: "Password",
      type: "text",
      isRequired: true
    }
  ],
};

const ProfileSurveyJs = () => {

  const dispatch = useDispatch();
  const { loadingToken, token, tokenError } = useSelector(state => state.userToken);

  const handleSubmit = (survey) => {
    const formData = survey.data;
    console.log('Form submitted(Survey Js):', formData);
    dispatch(getToken(formData));
  };


  const survey = new Model(surveyJson);

  survey.completeText = "Login";
  survey.onComplete.add(handleSubmit);

  return (
    <div className="profile-container">
      <Survey model={survey} />

      {loadingToken && <p>Loading...</p>}
      {tokenError && <p>Invalid Credentials</p>}
    </div>
  )
}

export default ProfileSurveyJs;
