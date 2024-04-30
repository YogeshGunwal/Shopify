import { useState } from "react";
import { Navigate} from "react-router-dom";
import '../../styles/Contact.scss';

export default function Contact() {

  const initialFormData = {
    userName: "",
    userEmail: "",
    feedback: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return formData.userName.trim() !== '' && formData.userEmail.trim() !== '' && formData.feedback.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Provide Your Feedback</h2>

      <form className="contact-form" autoComplete="off">

        <div className="form-group">
          <label>Name:</label>
          <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Feedback:</label>
          <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" onClick={handleSubmit} disabled={!isFormValid()}>Submit</button>
      </form>
      {submitted && <Navigate to="/feedback" />}
    </div>
  );
}
