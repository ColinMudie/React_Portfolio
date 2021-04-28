import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
    console.log(process.env);
    const { register, setError, handleSubmit, reset } = useForm();
    emailjs.init(process.env.REACT_APP_USER_ID);
    
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };
    const onSubmit = async (data) => {
        try {
            const templateParams = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams
            );
            reset();
            toastifySuccess()
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='name'
                                            {...register('test', {
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Name'
                                        ></input>
                                        {/* {errors.name && <span className='errorMessage'>{errors.name.message}</span>} */}
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='email'
                                            name='email'
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                            className='form-control formInput'
                                            placeholder='Email address'
                                        ></input>
                                        {setError.email && (
                                            <span className='errorMessage'>Please enter a valid email address</span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            name='subject'
                                            {...register('subject', {
                                                required: { value: true, message: 'Please enter a subject' },
                                                maxLength: {
                                                    value: 75,
                                                    message: 'Subject cannot exceed 75 characters'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Subject'
                                        ></input>
                                        {setError.subject && (
                                            <span className='errorMessage'>{setError.subject.message}</span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            name='message'
                                            {...register('message', {
                                                required: true
                                            })}
                                            className='form-control formInput'
                                            placeholder='Message'
                                        ></textarea>
                                        {setError.message && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                </div>
                                <button className='submit-btn' type='submit'>
                                    Submit
                                    </button>
                            </form>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;