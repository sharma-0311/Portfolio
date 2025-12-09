import { Link } from 'react-router-dom';
import { AcademicCapIcon, CpuChipIcon, CloudIcon, CommandLineIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SkillCard from '../components/SkillCard';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const skills = {
    aiMl: ['Neural Networks', 'Reinforcement Learning', 'Deep Learning', 'Generative AI', 'Neuro-symbolic AI', 'LLM Fine-Tuning'],
    cloudDev: ['Git', 'Amazon SageMaker', 'Docker', 'Vector DBs'],
    programming: ['Python', 'MySQL', 'JavaScript', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face Transformers', 'Scikit-Learn', 'CUDA', 'Pandas', 'NumPy'],
    dataScience: ['Power BI', 'Excel (Advanced)', 'Feature Engineering', 'Regression', 'Clustering', 'Prompt Engineering', 'SHAP Explainability'],
};

const featuredProjects = [
    {
        title: 'ColorWave – SAR Image Colorizer Model',
        description: [
            'Production-ready deep learning system transforming grayscale SAR images into realistic RGB visualizations using UNet, GANs, and attention mechanisms.'
        ],
        tags: ['Python', 'PyTorch', 'GANs', 'Streamlit'],
        githubUrl: 'https://github.com/sharma-0311/ColorWave-SAR_Image_Colorizer',
        image: '/ColorWave.png'
    },
    {
        title: 'CreditWiseAI - Interactive Credit Risk Prediction System',
        description: [
            'Interactive credit risk prediction system with 90%+ precision using Streamlit, Random Forest, SHAP explainability, and RAG-based chatbot.'
        ],
        tags: ['Streamlit', 'Random Forest', 'SHAP', 'LangChain'],
        githubUrl: 'https://github.com/sharma-0311/CreditWiseAI',
        image: ' https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
];

export default function Home() {
    return (
        <div className="pt-0 pb-16">
            <Hero />

            <div className="container-custom">

                <div className="mb-16 md:mb-32">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">About Me</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                            Crafting AI Solutions & <br className="hidden sm:block" />
                            ML Models
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0">
                            Junior Data Scientist and Machine Learning Engineer specializing in AI/ML innovations and scalable Ml Models.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column: Background - Spans 1 column but full height */}
                        <div className="lg:col-span-1 h-full">
                            <SkillCard
                                title="Background"
                                description="As a Junior Data Scientist and Machine Learning Engineer with a strong foundation in Computer Science, I specialize in developing cutting-edge AI/ML solutions and GenAI innovations. My expertise spans Data Science, Machine Learning, and building scalable AI solutions that drive business value."
                                delay={0.2}
                                icon={<AcademicCapIcon className="w-6 h-6" />}
                            />
                        </div>

                        {/* Right Column: 2x2 Grid for Skills - Spans 2 columns */}
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* AI & ML */}
                            <SkillCard
                                title="AI & Machine Learning"
                                tags={skills.aiMl}
                                delay={0.3}
                                icon={<CpuChipIcon className="w-6 h-6" />}
                            />

                            {/* Cloud Architecture */}
                            <SkillCard
                                title="Cloud Architecture & MLOps"
                                tags={skills.cloudDev}
                                delay={0.4}
                                icon={<CloudIcon className="w-6 h-6" />}
                            />

                            {/* Programming */}
                            <SkillCard
                                title="Programming"
                                tags={skills.programming}
                                delay={0.5}
                                icon={<CommandLineIcon className="w-6 h-6" />}
                            />

                            {/* Data Science */}
                            <SkillCard
                                title="Data Science"
                                tags={skills.dataScience}
                                delay={0.6}
                                icon={<ChartBarIcon className="w-6 h-6" />}
                            />
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/about" className="inline-flex items-center gap-2 bg-white dark:bg-white text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors shadow-sm border border-zinc-200 dark:border-zinc-800">
                            Learn More About Me <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="mb-12 md:mb-20">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-neutral-800 pb-4 text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} delay={idx * 0.1} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/projects" className="inline-flex items-center gap-2 bg-white dark:bg-white text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
                            View All Projects <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Old button removed, new one is integrated in the About section above */}
            </div>
        </div>
    );
}
