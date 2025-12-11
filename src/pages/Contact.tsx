import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // TODO: Replace with your EmailJS credentials
      // 1. Sign up at https://www.emailjs.com/ (free tier available)
      // 2. Create a service (e.g., 'contact_service')
      // 3. Create an email template (e.g., 'contact_template') with placeholders: {{name}}, {{email}}, {{message}}
      // 4. Get your Public Key from EmailJS dashboard
      const result = await emailjs.send(
        'service_z5pcknw',      // e.g., 'service_abc123'
        'template_n44crps',     // e.g., 'template_def456'
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'AkBSSc1aDgSEUD2SU'       // e.g., 'user_ghi789'
      );

      if (result.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly.' });
    } finally {
      setIsLoading(false);
    }
  };

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
          onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
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
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
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
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-zinc-400 dark:placeholder-zinc-600 resize-none"
            />
          </div>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg text-sm ${
                status.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
                  : 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
              isLoading
                ? 'bg-zinc-400 dark:bg-zinc-700 text-zinc-500 cursor-not-allowed'
                : 'bg-zinc-900 dark:bg-zinc-600 text-white hover:bg-zinc-800 dark:hover:bg-zinc-500 focus:ring-zinc-500'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {/* Optional: WhatsApp Fallback Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-zinc-600 dark:text-gray-400 mb-2">Or message me directly on WhatsApp:</p>
          <a
            href={`https://wa.me/916398407954?text=Hi%20Raghav,%20I'm%20interested%20in%20your%20portfolio!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Open WhatsApp
          </a>
          {/* TODO: Replace YOUR_PHONE_NUMBER with your actual WhatsApp number (e.g., 1234567890 for +1 234 567 890) */}
        </motion.div>
      </div>
    </div>
  );
}
