import { motion } from 'framer-motion';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
    title: string;
    description: string[];
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
    delay?: number;
}

export default function ProjectCard({ title, description, tags, githubUrl, demoUrl, image, delay = 0 }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white dark:bg-black rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col h-full hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
        >
            {/* Image Section */}
            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                        <CodeBracketIcon className="h-16 w-16 text-zinc-300 dark:text-zinc-700" />
                    </div>
                )}
                {/* Optional: Add a subtle overlay gradient if needed for text readability on image, but we have text below */}
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
                        {title}
                    </h3>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                        Featured Project
                    </span>
                </div>

                <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-4">
                    {description.join(' ')}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto pt-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-zinc-900 dark:text-white border border-zinc-900 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <CodeBracketIcon className="h-4 w-4" />
                            GitHub
                        </a>
                    )}
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-200 transition-colors"
                        >
                            <EyeIcon className="h-4 w-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
