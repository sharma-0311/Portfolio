import { motion } from 'framer-motion';

interface SkillCardProps {
    title: string;
    description?: string;
    tags?: string[];
    delay?: number;
    icon?: React.ReactNode;
}

export default function SkillCard({ title, description, tags, delay = 0, icon }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white dark:bg-zinc-950 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 card-hover h-full flex flex-col"
        >
            <div className="flex items-center gap-3 mb-4">
                {icon && (
                    <span className="text-zinc-700 dark:text-zinc-300">
                        {icon}
                    </span>
                )}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
            </div>

            {description && <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm leading-relaxed flex-1">{description}</p>}

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
