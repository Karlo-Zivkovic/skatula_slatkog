import InnerHeader from "@/components/InnerHeader";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <InnerHeader backHref="/" backLabel="Natrag / Back" />

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h1 className="font-display text-4xl md:text-5xl text-brown mb-2">Privacy Policy</h1>
        <p className="text-sm text-brown-light/60 mb-10">Last updated June 30, 2026</p>

        <div className="prose prose-sm max-w-none text-brown-light space-y-8">

          <p>This Privacy Notice for <strong>Škatula slatkog</strong> ("we", "us", or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services, including when you:</p>
          <ul>
            <li>Visit our website at <a href="http://www.skatulaslatkog.com" className="text-gold underline">www.skatulaslatkog.com</a></li>
            <li>Use Škatula slatkog — a Croatian artisan pastry shop offering handcrafted desserts, cakes and pastry boxes inspired by Mediterranean ingredients and Dalmatian tradition. Customers can browse products and send inquiries through the website contact form.</li>
            <li>Engage with us in other related ways, including any marketing or events.</li>
          </ul>
          <p><strong>Questions or concerns?</strong> If you have any questions or concerns, please contact us at <a href="mailto:skatulaslatkog@gmail.com" className="text-gold underline">skatulaslatkog@gmail.com</a>.</p>

          <h2 className="font-display text-2xl text-brown pt-4">1. What Information Do We Collect?</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us. The personal information we collect may include:</p>
          <ul>
            <li>Names</li>
            <li>Email addresses</li>
            <li>Message content submitted through our contact form</li>
          </ul>
          <p>We do not process sensitive personal information.</p>

          <h2 className="font-display text-2xl text-brown pt-4">2. How Do We Process Your Information?</h2>
          <p>We process your personal information to respond to your inquiries and solve any potential issues you might have with the requested service. We process your information only when we have a valid legal reason to do so.</p>

          <h2 className="font-display text-2xl text-brown pt-4">3. When and With Whom Do We Share Your Personal Information?</h2>
          <p>We may share information in the following situations:</p>
          <ul>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with any merger, sale of company assets, or acquisition of all or a portion of our business.</li>
            <li><strong>Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs to display our location on the website.</li>
          </ul>

          <h2 className="font-display text-2xl text-brown pt-4">4. Do We Use Cookies and Other Tracking Technologies?</h2>
          <p>We may use cookies and similar tracking technologies to gather information when you interact with our services. We also use Google Analytics to track and analyse the use of our website. You can opt out of being tracked by Google Analytics by visiting <a href="https://tools.google.com/dlpage/gaoptout" className="text-gold underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</p>
          <p>For more information on how we use cookies, please see our Cookie Policy.</p>

          <h2 className="font-display text-2xl text-brown pt-4">5. How Long Do We Keep Your Information?</h2>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice. No purpose in this notice will require us keeping your personal information for longer than <strong>1 year</strong>.</p>

          <h2 className="font-display text-2xl text-brown pt-4">6. How Do We Keep Your Information Safe?</h2>
          <p>We have implemented appropriate technical and organisational security measures designed to protect the security of any personal information we process. However, no electronic transmission over the Internet can be guaranteed to be 100% secure. You should only access our services within a secure environment.</p>

          <h2 className="font-display text-2xl text-brown pt-4">7. Do We Collect Information From Minors?</h2>
          <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using our services, you represent that you are at least 18 years old. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:skatulaslatkog@gmail.com" className="text-gold underline">skatulaslatkog@gmail.com</a>.</p>

          <h2 className="font-display text-2xl text-brown pt-4">8. What Are Your Privacy Rights?</h2>
          <p>You have the right to withdraw your consent to our processing of your personal information at any time by contacting us. Most web browsers are set to accept cookies by default — you can usually choose to set your browser to remove or reject cookies.</p>
          <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:skatulaslatkog@gmail.com" className="text-gold underline">skatulaslatkog@gmail.com</a>.</p>

          <h2 className="font-display text-2xl text-brown pt-4">9. Controls for Do-Not-Track Features</h2>
          <p>Most web browsers include a Do-Not-Track ("DNT") feature. We do not currently respond to DNT browser signals as no uniform technology standard for recognising and implementing DNT signals has been finalised. If a standard is adopted in the future, we will inform you in a revised version of this Privacy Notice.</p>

          <h2 className="font-display text-2xl text-brown pt-4">10. Do We Make Updates to This Notice?</h2>
          <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this page. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

          <h2 className="font-display text-2xl text-brown pt-4">11. How Can You Contact Us About This Notice?</h2>
          <p>If you have questions or comments about this notice, you may contact us at:</p>
          <address className="not-italic">
            <strong>Škatula slatkog</strong><br />
            Kroz Smrdečac 43<br />
            Split, Splitsko-dalmatinska županija 21000<br />
            Croatia<br />
            <a href="mailto:skatulaslatkog@gmail.com" className="text-gold underline">skatulaslatkog@gmail.com</a>
          </address>

          <h2 className="font-display text-2xl text-brown pt-4">12. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
          <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, correct inaccuracies, or delete your personal information. To submit a request, please contact us at <a href="mailto:skatulaslatkog@gmail.com" className="text-gold underline">skatulaslatkog@gmail.com</a>.</p>

        </div>
      </div>

      <Footer />
    </main>
  );
}
