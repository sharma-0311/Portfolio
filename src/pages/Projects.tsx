import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'ColorWave – SAR Image Colorizer Model',
        description: [
            'Production-ready deep learning system transforming grayscale SAR images into realistic RGB visualizations using UNet, GANs, and attention mechanisms.'
        ],
        tags: ['Python', 'PyTorch', 'GANs', 'UNet', 'Streamlit', 'Docker', 'TensorBoard', 'W&B', 'MLflow'],
        githubUrl: 'https://github.com/sharma-0311/ColorWave',
        image: 'ColorWave.png' // Abstract colorful tech
    },
    {
        title: 'ResQron – AI-Powered Disaster Response System',
        description: [
            'Autonomous AI system combining Swarm AI and thermal imaging for survivor detection and disaster prediction with real-time navigation.',
            'Winner – HackBhoomi 2025: Recognized for innovation in disaster management technology.',
            'Shortlisted for Smart India Hackathon (SIH2025047) for its potential impact and scalability.'
        ],
        tags: ['Python', 'TensorFlow', 'IoT', 'Swarm AI', 'Computer Vision', 'Thermal Imaging'],
        githubUrl: 'https://github.com/sharma-0311/ResQron',
        image: 'ResQron.png' // Drone/Aerial
    },
    {
        title: 'CreditWiseAI',
        description: [
            'Interactive credit risk prediction system with 90%+ precision using Streamlit, Random Forest, SHAP explainability, and RAG-based chatbot.'
        ],
        tags: ['Streamlit', 'Random Forest', 'SHAP', 'SQL', 'LangChain', 'RAG', 'Python'],
        githubUrl: 'https://github.com/sharma-0311/CreditWiseAI',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' // Finance/Data
    }
];

export default function Projects() {
    return (
        <div className="pt-24 pb-16">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-gray-400">
                        A selection of my innovative work in AI/ML, GenAI, and data science.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </div>
    );
}
