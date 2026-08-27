export const metadata = {
  title: "Privacy Policy | Loyal String",
  description: "Privacy Policy for Loyal String International Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="text-slate-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Loyal String International Pvt. Ltd. ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-800">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-slate-800">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong className="text-slate-800">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong className="text-slate-800">Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
            </p>
            <ul className="space-y-2">
              <li><strong>Email address:</strong> <a href="mailto:contact@loyalstring.com" className="text-blue-600 hover:underline">contact@loyalstring.com</a></li>
              <li><strong>Phone number:</strong> <a href="tel:+917066610009" className="text-blue-600 hover:underline">+91 70666 10009</a></li>
              <li><strong>Postal address:</strong> Rajashree Estate, Hinjawadi Phase II, Pune, Maharashtra 411057</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
