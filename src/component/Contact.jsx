import { useState } from 'react';
import '../App.css';
import EarthCanva from './EarthCanva';
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentMainFrame from './ComponentMainFrame';

const initialFormState = { name: '', email: '', message: '' };

function Contact() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [form, setForm] = useState(initialFormState);
  const [sending, setSending] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(initialFormState);

  const submitMail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send('service_bmjkl0l', 'template_0dco9mj', {
        user_name: form.name,
        to_name: 'Prashant Joshi',
        user_email: form.email,
        to_email: 'prashantjoshipj67@gmail.com',
        message: form.message,
      }, 'YuJgHnQdhuTPRjRur')
      .then(() => {
        toast.success('Mail sent successfully', {
          style: { backgroundColor: '#6d58f6', color: '#fcfafa' },
        });
        resetForm();
      })
      .catch((err) => console.error('Error:', err))
      .finally(() => setSending(false));
  };

  const motionProps = (initialX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.5 },
    viewport: {
      once: isSmallScreen,
      margin: `0px 0px ${isSmallScreen ? '-20%' : '-30%'} 0px`,
    },
  });

  return (
    <div className="h-screen flex">
      <div className="mt-1 lg:mt-8 w-full overflow-hidden">
        <motion.h1
          className="text-[2.5rem] lg:text-[4rem] mt-10 lg:mt-16 font-mono bg-gradient-to-br from-white to-purple-700 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Contact
        </motion.h1>

        <div className="flex flex-col lg:flex-row mt-2 lg:mt-3 h-full">
          <div className='flex-1'>
          <motion.div
            className="formDiv p-4 lg:p-8  ml-0 lg:ml-10 " 
            {...motionProps(-300)}
          >
            <form onSubmit={submitMail} className="space-y-1 lg:space-y-8">
              {['name', 'email', 'message'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="text-lg lg:text-xl inline-block lg:block mr-3 ">
                    {`Your ${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                  </label>
                  {field !== 'message' ? (
                    <input
                      className="inputField h-8 lg:h-10 w-[200px] lg:w-72"
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={`Enter your ${field}`}
                      value={form[field]}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <textarea
                      className="inputFieldMessage"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={isSmallScreen ? 2 : isMediumScreen ? 3 : 8}
                      cols={isSmallScreen ? 30 : 50}
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-purple-800 text-white text-lg lg:text-2xl p-2 rounded-lg mt-4"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>
          </div>
          <motion.div className=" flex-1" {...motionProps(200)}>
            <EarthCanva />
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
const Contactpage =ComponentMainFrame(Contact, 'contact');


export default Contactpage