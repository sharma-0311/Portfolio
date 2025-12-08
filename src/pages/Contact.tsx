import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container-custom max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Contact Me</h1>
                    <p className="text-lg text-zinc-600 dark:text-gray-400 leading-relaxed">
                        Have a question or want to get in touch? Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-zinc-900 dark:text-white mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-zinc-900 dark:text-white mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-zinc-900 dark:text-white mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Your message..."
                            className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-zinc-400 dark:placeholder-zinc-600 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-lg bg-zinc-900 dark:bg-zinc-600 text-white font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
}
