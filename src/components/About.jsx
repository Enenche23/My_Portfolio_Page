const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            About Me
          </h2>
          
          <div className={`text-lg leading-relaxed space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              Hello! I'm Christopher Ejeh Elias, a passionate web developer specializing in building exceptional digital experiences. 
              With a background in fullstack development, I enjoy creating applications that are both functional and beautiful.
            </p>
            
            <p>
              My journey in web development began as way back as 2016, when I was in the Polytechnic. I happen to be the best student 
              in computer programming, and that ignited an insertiable passion for web development in me. Since then, I've been constantly learning 
              and improving my skills with modern technologies and best practices. I'm particularly interested in 
              front-end and backend development.
            </p>
            
            <p>
              When I'm not coding, you can find me reading books or playing football. I believe that these activities help me maintain 
              creativity and bring fresh perspectives to my development work.
            </p>
            
            <div className="mt-10">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Education & Experience
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg">Kaduna Polytechnic</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Student Union Leader(Departmental)/ HND • 2011 - 2017
                  </p>
                  <p className="mt-2">
                    Organizing Tutorials on Computer Programming, Most Inquisitive in Nature, Microbiology.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg">Colab Innovation Campus</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    FrontEnd Developer • 2022 - 2025
                  </p>
                  <p className="mt-2">
                    Developing Beautifull and Responsive HTML, CSS, JavaScript, Tailwind CSS Designs and BackEnd Developments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;