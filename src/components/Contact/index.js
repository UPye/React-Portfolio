import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <main>
      <section className='mb-4 p-5'>

        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me!</h2>
        <p className="text-center w-responsive mx-auto mb-5">Still have questions? Please do not hesitate to contact me directly.</p>


        <div className='row align-items-center'>
          <div className="col-md-6 mb-md-0 mb-5 p-4 center-block">

            <form id="contact-form" name='contact-form' onSubmit={handleSubmit}>

              <div className='row'>
                <div className='col-md-6'>
                  <div className='md-form mb-4'>
                    <input className='form-control' placeholder="Name" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    {/* <label htmlFor="name">Name</label> */}
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='md-form mb-4'>
                    <input className='form-control' placeholder="Email Address" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    {/* <label htmlFor="email">Email address</label> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-4">
                    <input placeholder="Subject" type="text" id="subject" name="subject" className="form-control" />
                    {/* <label htmlFor="subject" className="">Subject</label> */}
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-med-12'>
                  <div className='md-form'>
                    <textarea placeholder="Message" className="form-control md-textarea" type='text' id='message' name="message" rows="6" defaultValue={message} onBlur={handleChange} />
                    {/* <label htmlFor="message">Message</label> */}
                  </div>
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* <button data-testid="button" type="submit">Submit</button> */}
              <div className="text-center mt-2">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
            <div className="status"></div>
          </div>
          <div className="col-md-12 text-center my-info">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Jacksonville, Fl 32221, USA</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>(404)416-3258</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>Urika.Pye@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
