import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import { AcademicCapIcon, CheckBadgeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const skills = {
    aiMl: ['Neural Networks', 'Reinforcement Learning', 'Deep Learning', 'Generative AI', 'Neuro-symbolic AI', 'LLM Fine-Tuning'],
    cloudDev: ['Git', 'Amazon SageMaker', 'Docker', 'Vector DBs'],
    programming: ['Python', 'MySQL', 'JavaScript', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face Transformers', 'Scikit-Learn', 'CUDA', 'Pandas', 'NumPy'],
    dataScience: ['Power BI', 'Excel (Advanced)', 'Feature Engineering', 'Regression', 'Clustering', 'Prompt Engineering', 'SHAP Explainability'],
};

const experience = [
    {
        title: 'Junior Data Scientist',
        company: 'AcademyXcel Solutions',
        date: 'Aug 2024 – Present',
        description: [
            'Integrated LangChain and RAG (Retrieval-Augmented Generation) to develop domain-specific chatbots capable of answering complex queries with high accuracy.',
            'Developed a SAR Image Colorization model (ColorWave) using GANs (Generative Adversarial Networks) and U-Net architecture, achieving a PSNR score of 28+.',
            'Utilized Amazon S3 for efficient data storage and retrieval during model training and deployment phases.',
            'Conducted extensive data cleaning and feature engineering to optimize model performance and reduce overfitting.'
        ],
        tags: ['LangChain', 'RAG', 'GANs', 'U-Net', 'Python']
    },
    {
        title: 'Data Science Intern',
        company: 'Celebal Technologies',
        date: 'May 2024 – July 2024',
        description: [
            'Built a real-time credit risk assessment app (CreditWiseAI) using Streamlit, Random Forest, and SHAP, achieving 90%+ precision in identifying high-risk applicants.',
            'Engineered robust data pipelines and pre-processing workflows using Python, SQL, and Pandas to handle large datasets, reducing operational inefficiencies.',
            'Designed and deployed an interactive dashboard for visualizing financial data trends, enabling stakeholders to make data-driven decisions.',
            'Collaborated with cross-functional teams to integrate machine learning models into existing business frameworks.'
        ],
        tags: ['Python', 'Streamlit', 'Random Forest', 'SHAP', 'SQL', 'Pandas']
    },
    {
        title: 'Data Science Intern',
        company: 'Cognifyz Technologies',
        date: 'Feb 2024 – April 2024',
        description: [
            'Designed and optimized ETL pipelines, processing 50K+ customer records with SQL and Python.',
            'Built interactive dashboards, improving data accessibility and reducing processing time by 20%.',
            'Collaborated cross-functionally to improve data models, resulting in a 15% increase in marketing efficiency.',
        ],
        tags: ['Python', 'Random Forest', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Power BI']
    }
];

const certifications = [
    'Google Data Analytics Professional Certificate',
    'Accenture Data Analytics and Visualization Job Simulation',
    'Deloitte Data Science Job Simulation',
    'HackerRank SQL (Advanced) Certificate'
];

export default function About() {
    return (
        <div className="pt-24 pb-16">
            <div className="container-custom">
                {/* Profile Section */}
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Raghav Gaur"
                            className="w-full h-full object-cover rounded-full border-4 border-zinc-200 dark:border-neutral-800 shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 text-center md:text-left pt-2"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">Raghav Gaur</h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-300 font-medium mb-4">Junior Data Scientist & AI/ML Engineer</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {['ML Engineer', 'Data Scientist', 'AI Engineer'].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-neutral-900 text-zinc-700 dark:text-zinc-300 text-sm border border-zinc-200 dark:border-neutral-800 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Professional Summary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-20"
                >
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-zinc-200 dark:border-neutral-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-zinc-200 dark:border-neutral-800 flex items-center gap-3 bg-zinc-50/50 dark:bg-neutral-900/50">
                            <DocumentTextIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Professional Summary</h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg">
                                I’m a Data Science and Machine Learning practitioner who brings analytical clarity to messy, real-world problems. My work spans predictive modeling, data visualization, cloud-based analytics, and full-stack ML deployment. Across projects, I focus on building solutions that are accurate, explainable, and production-ready.
                                <br /><br />
                                I’ve engineered end-to-end systems like CreditWiseAI, a credit-risk prediction platform integrating Random Forest models, SHAP-based explainability, MySQL logging, and a responsive Streamlit UI. I’ve also created Colorwave, an AI-powered image enhancement tool that sharpened my understanding of computer vision pipelines and user-centric ML design.
                                <br /><br />
                                My toolbox includes Python, SQL, Power BI, scikit-learn, TensorFlow, PyTorch, and cloud fundamentals. I’ve earned certifications in Machine Learning, Data Analytics, and Python development, strengthening my technical foundation for industry-level challenges.
                                <br /><br />
                                Professionally, I’ve contributed as a Training Executive, mentoring learners in emerging technologies and simplifying complex concepts into practical knowledge. These experiences refine my communication and cross-functional collaboration skills, making me effective in teams where data meets business decisions.
                                <br /><br />
                                I thrive where curiosity meets structure. Whether exploring new algorithms, optimizing pipelines, or designing intuitive dashboards, I aim to create solutions that deliver measurable value and scale gracefully.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-neutral-800 pb-4">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillCard title="AI & Machine Learning" tags={skills.aiMl} delay={0.1} />
                        <SkillCard title="Cloud & Developer Tools" tags={skills.cloudDev} delay={0.2} />
                        <SkillCard title="Programming" tags={skills.programming} delay={0.3} />
                        <SkillCard title="Data Science" tags={skills.dataScience} delay={0.4} />
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-neutral-800 pb-4">Work Experience</h2>
                    <div className="space-y-8">
                        {experience.map((job, idx) => (
                            <ExperienceCard key={idx} {...job} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>

                {/* Education & Certifications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                            <AcademicCapIcon className="h-8 w-8 text-zinc-700 dark:text-zinc-100" /> Education
                        </h2>
                        <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-zinc-200 dark:border-neutral-800 shadow-lg">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Bachelor of Computer Applications</h3>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-1">Artificial Intelligence</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-zinc-500 dark:text-zinc-400">Invertis University</span>
                                <span className="text-zinc-500 bg-zinc-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-sm font-medium">2023 - 2026</span>
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300 font-medium">GPA: 3.56 / 4.0</p>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                            <CheckBadgeIcon className="h-8 w-8 text-zinc-700 dark:text-zinc-100" /> Certifications
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-zinc-200 dark:border-neutral-800 flex items-center gap-4 shadow-sm">
                                    <div className="p-2 bg-zinc-100 dark:bg-neutral-800 rounded-full">
                                        <CheckBadgeIcon className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                                    </div>
                                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
