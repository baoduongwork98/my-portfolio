// app/components/ContactMe.tsx
'use client';

import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="container py-24 space-y-8 px-4 sm:px-6 lg:px-8 w-screen mx-auto h-auto lg:h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I'd love to hear from you! Feel free to send me a message.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted! (You can connect this to a backend)');
            }}
          >
            <div>
              <label htmlFor="name" className="block text-left mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
