export const metadata = {
  title: "Terms of Service | Loyal String",
  description: "Terms and Conditions for Loyal String International Pvt. Ltd.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Terms and Conditions</h1>
          <p className="text-slate-500 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="text-slate-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing our website and using our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on Loyal String International Pvt. Ltd.'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Loyal String International Pvt. Ltd.'s Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="mt-4">
              This will let Loyal String International Pvt. Ltd. to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              All the materials on Loyal String International Pvt. Ltd.'s Website are provided "as is". Loyal String International Pvt. Ltd. makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Loyal String International Pvt. Ltd. does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
            <p className="mb-4">
              Loyal String International Pvt. Ltd. or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Loyal String International Pvt. Ltd.'s Website, even if Loyal String International Pvt. Ltd. or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Revisions and Errata</h2>
            <p className="mb-4">
              The materials appearing on Loyal String International Pvt. Ltd.'s Website may include technical, typographical, or photographic errors. Loyal String International Pvt. Ltd. will not promise that any of the materials in this Website are accurate, complete, or current. Loyal String International Pvt. Ltd. may change the materials contained on its Website at any time without notice. Loyal String International Pvt. Ltd. does not make any commitment to update the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:contact@loyalstring.com" className="text-blue-600 hover:underline">contact@loyalstring.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+917066610009" className="text-blue-600 hover:underline">+91 70666 10009</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
