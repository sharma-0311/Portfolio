import { motion } from 'framer-motion';

interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    description: string[];
    tags: string[];
    delay?: number;
}

export default function ExperienceCard({ title, company, date, description, tags, delay = 0 }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative pl-8 pb-12 border-l-2 border-zinc-200 dark:border-neutral-800 last:border-l-0 last:pb-0"
        >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-400 dark:bg-neutral-600 border-4 border-white dark:border-black" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 sm:gap-0">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">{title}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium bg-zinc-100 dark:bg-neutral-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-neutral-800 w-fit">{date}</span>
            </div>
            <div className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-4">{company}</div>
            <ul className="space-y-2 mb-4">
                {description.map((item, idx) => (
                    <li key={idx} className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-zinc-400 dark:text-neutral-500 mt-1.5">•</span>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 dark:bg-neutral-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-neutral-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
