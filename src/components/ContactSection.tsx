import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-100 px-4 py-16 dark:bg-slate-800/50 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          聯絡我們
        </h2>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
          查詢、報價或合作，填寫下表我們會盡快回覆。
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
