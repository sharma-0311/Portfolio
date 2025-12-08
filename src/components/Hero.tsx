import { Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden border-4 border-gray-300 dark:border-gray-700">
            <img
              src="../public/RagahvGaur_Passport_Photo.jpg"
              alt="Raghav Gaur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Raghav Gaur
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
          Data Scientist | Machine Learning Engineer
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Building intelligent systems that learn from data and drive business value through AI/ML innovations.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
          >
            View Projects
          </Link>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/sharma-0311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/raghav-gaur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:rgour6350@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
