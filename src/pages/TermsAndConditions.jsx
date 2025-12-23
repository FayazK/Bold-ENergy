const TermsAndConditions = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '400px', marginBottom: '100px' }}>
        <img
          src="/terms-hero.jpg"
          alt="Terms and Conditions"
          className="w-full h-full object-cover"
          style={{ height: '400px' }}
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.6'
          }}
        />
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
            <h1 className="font-bold text-white mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '60px', letterSpacing: '0.03em' }}>
              Terms and Conditions
            </h1>
            <p className="text-white" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', letterSpacing: '0.03em' }}>
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="bg-white" style={{ paddingLeft: '200px', paddingRight: '200px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Introduction */}
          <div className="mb-12">
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              By accessing and using Bold Energy's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              2. Services Description
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy provides solar energy solutions including:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li>Solar panel installation and maintenance services</li>
              <li>Energy consultation and system design</li>
              <li>Solar financing and leasing options</li>
              <li>Third-party ownership (TPO) programs</li>
              <li>Ongoing customer support and monitoring</li>
              <li>Dealer and partnership programs</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              3. Service Agreement and Installation
            </h2>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887', letterSpacing: '0.03em' }}>
              Quote and Proposal
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              All quotes and proposals are valid for 30 days from the date of issue unless otherwise specified. Pricing is subject to change based on site conditions, permit requirements, and material costs.
            </p>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887', letterSpacing: '0.03em' }}>
              Installation Process
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Installation timelines are estimates and may vary due to weather conditions, permit delays, utility company requirements, and other factors beyond our control. We will make reasonable efforts to complete installation within the estimated timeframe.
            </p>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887', letterSpacing: '0.03em' }}>
              Permits and Approvals
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy will obtain all necessary permits and approvals for solar installation. However, the customer is responsible for providing access to their property and ensuring compliance with homeowners association (HOA) requirements, if applicable.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              4. Payment Terms
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Payment terms vary based on the financing option selected:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li><strong>Purchase:</strong> Payment terms will be outlined in your service agreement. Typically includes a deposit upon contract signing and final payment upon installation completion.</li>
              <li><strong>Financing:</strong> Financing terms are subject to credit approval through our lending partners. Monthly payments and interest rates will be detailed in your loan agreement.</li>
              <li><strong>TPO/Lease:</strong> Monthly lease or power purchase agreement (PPA) payments will be outlined in your TPO agreement.</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Late payments may result in additional fees and potential service interruption. We reserve the right to suspend services for non-payment.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              5. Warranties and Guarantees
            </h2>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887', letterSpacing: '0.03em' }}>
              Equipment Warranties
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Solar panels, inverters, and other equipment come with manufacturer warranties. Typical warranties include:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li>Solar panels: 25-year performance warranty</li>
              <li>Inverters: 10-25 year warranty (depending on manufacturer)</li>
              <li>Batteries: 10-year warranty (if applicable)</li>
            </ul>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887', letterSpacing: '0.03em' }}>
              Installation Warranty
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy provides a workmanship warranty covering installation defects for a period specified in your service agreement. This warranty covers labor and installation-related issues but does not cover damage caused by extreme weather, acts of God, or improper use.
            </p>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887', letterSpacing: '0.03em' }}>
              Performance Guarantee
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              While we provide energy production estimates, actual performance may vary based on weather conditions, shading, system maintenance, and other environmental factors. Estimated savings are based on current utility rates and are not guaranteed.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              6. Customer Responsibilities
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Customers are responsible for:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li>Providing accurate information about property ownership and electrical system</li>
              <li>Ensuring safe and clear access to the installation site</li>
              <li>Maintaining homeowners insurance that covers solar equipment</li>
              <li>Notifying Bold Energy of any roof repairs or structural changes</li>
              <li>Following recommended maintenance schedules</li>
              <li>Complying with utility company interconnection requirements</li>
              <li>Obtaining HOA approval if required</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              7. Cancellation and Refund Policy
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Customers have the right to cancel their service agreement within the legally required cooling-off period (typically 3 business days) for a full refund of any deposits paid.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              After the cooling-off period, cancellation fees may apply based on work completed:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li>Before permits are pulled: Cancellation fee equal to administrative costs</li>
              <li>After permits are obtained: Non-refundable permit and design fees</li>
              <li>After installation begins: Payment for work completed plus restocking fees</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              8. Limitation of Liability
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy's liability is limited to the cost of the solar system installation. We are not liable for:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits or energy savings</li>
              <li>Damage caused by extreme weather events or acts of God</li>
              <li>Utility company changes to rates, policies, or net metering programs</li>
              <li>Changes in government incentives or tax credits</li>
              <li>Damage caused by customer negligence or third parties</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              9. Intellectual Property
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              All content on the Bold Energy website, including text, graphics, logos, images, and software, is the property of Bold Energy and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without written permission.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              10. Dispute Resolution
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Any disputes arising from these terms or our services shall be resolved through:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc', letterSpacing: '0.03em' }}>
              <li><strong>Negotiation:</strong> Initial attempt to resolve through direct communication</li>
              <li><strong>Mediation:</strong> If negotiation fails, both parties agree to participate in mediation</li>
              <li><strong>Arbitration:</strong> Binding arbitration in accordance with the American Arbitration Association rules</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              This agreement shall be governed by the laws of the state of Connecticut.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              11. Indemnification
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              You agree to indemnify and hold Bold Energy harmless from any claims, losses, damages, or expenses arising from your violation of these terms or misuse of our services.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              12. Force Majeure
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to: natural disasters, government actions, labor disputes, material shortages, pandemics, or utility company delays.
            </p>
          </div>

          {/* Section 13 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              13. Modifications to Terms
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy reserves the right to modify these terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              14. Contact Information
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              For questions about these Terms and Conditions, please contact:
            </p>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px', letterSpacing: '0.03em' }}>
              <strong>Bold Energy</strong>
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px', letterSpacing: '0.03em' }}>
              30 Old Kings Hwy S, Darien, Suite #1001, CT 06820
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px', letterSpacing: '0.03em' }}>
              Email: info@bold.energy
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px', letterSpacing: '0.03em' }}>
              Phone: 123-456-7890
            </div>
          </div>

          {/* Agreement Section */}
          <div style={{ backgroundColor: '#385887', padding: '40px', borderRadius: '10px' }}>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#FFFFFF', letterSpacing: '0.03em' }}>
              Agreement
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', lineHeight: '1.8', letterSpacing: '0.03em' }}>
              By using Bold Energy's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
