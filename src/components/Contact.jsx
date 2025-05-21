import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - in a real application, you would send this to a backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        text: 'Thank you! Your message has been sent successfully.', 
        isError: false 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Get In Touch
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
                      className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    >
                      christopherejehelias158353@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    >
                      + (234) 705-839-0870
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Location</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Kaduna South, Kaduna State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className={`font-medium mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Social Profiles
                </h4>
                <div className="flex space-x-4">
                  {/* Add your social media icons here */}
                  {/* Example for GitHub, LinkedIn, Twitter, etc. */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Send Me a Message
              </h3>
              
              {submitMessage.text && (
                <div className={`mb-6 p-4 rounded-md ${
                  submitMessage.isError 
                    ? (darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-700')
                    : (darkMode ? 'bg-green-900/50 text-green-200' : 'bg-green-100 text-green-700')
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Christopher Ejeh Elias
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 ${
                        darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      christopherejehelias158353@gmail.com
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 ${
                        darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="subject" 
                    className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className={`w-full px-4 py-2 rounded-md border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500'
                    }`}
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="5" 
                    className={`w-full px-4 py-2 rounded-md border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500'
                    }`}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;