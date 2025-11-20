const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '400px', marginBottom: '100px' }}>
        <img
          src="/homeowners.png"
          alt="Privacy Policy and Terms"
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
            <h1 className="font-bold text-white mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '60px' }}>
              Privacy Policy & Terms
            </h1>
            <p className="text-white" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px' }}>
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white" style={{ paddingLeft: '200px', paddingRight: '200px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Introduction */}
          <div className="mb-12">
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              1. Information We Collect
            </h2>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Personal Information
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>Request a quote or consultation</li>
              <li>Register for our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Apply to become a sales dealer</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              This information may include: name, address, email address, phone number, property details, energy usage information, financial information for financing applications, and any other information you choose to provide.
            </p>

            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Automatically Collected Information
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about your browsing actions and patterns.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We use the information we collect in the following ways:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>To provide, operate, and maintain our services</li>
              <li>To process your solar installation requests and quotes</li>
              <li>To communicate with you about your installation, including updates and support</li>
              <li>To process your financing applications and payment transactions</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations and resolve disputes</li>
              <li>To prevent fraudulent transactions and protect against criminal activity</li>
              <li>To analyze energy usage patterns and provide customized recommendations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              3. Disclosure of Your Information
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We may share your information in the following situations:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as installation contractors, financing partners, customer service providers, and marketing agencies.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition of all or a portion of our business.</li>
              <li><strong>Legal Compliance:</strong> We may disclose your information where required by law or in response to valid requests by public authorities.</li>
              <li><strong>Utility Companies:</strong> We may share necessary information with utility companies to facilitate solar panel installation, net metering setup, and energy credits.</li>
              <li><strong>Financing Partners:</strong> If you apply for financing, we may share your information with our lending partners to process your application.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              4. Cookies and Tracking Technologies
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              5. Data Security
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We maintain physical, electronic, and procedural safeguards including:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>Encryption of sensitive data during transmission</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information by employees on a need-to-know basis</li>
              <li>Secure storage and disposal of personal information</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              6. Your Data Protection Rights
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data under certain conditions.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing of your personal data under certain conditions.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request transfer of your data to another organization or directly to you.</li>
              <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data under certain conditions.</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              To exercise any of these rights, please contact us at info@bold.energy.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              7. Third-Party Links
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              8. California Privacy Rights
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information held by businesses</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We do not sell your personal information to third parties.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              9. Children's Privacy
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              10. Data Retention
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. This includes:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>Maintaining records for warranty and service obligations</li>
              <li>Complying with legal, accounting, or reporting requirements</li>
              <li>Resolving disputes and enforcing our agreements</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              11. International Data Transfers
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              12. Updates to This Privacy Policy
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          {/* Section 13 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              13. Contact Us
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              <strong>Bold Energy</strong>
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              30 Old Kings Hwy S, Darien, Suite #1001, CT 06820
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              Email: info@bold.energy
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              Phone: 123-456-7890
            </div>
          </div>

          {/* Consent Section */}
          <div className="mb-12" style={{ backgroundColor: '#F1F4D9', padding: '40px', borderRadius: '10px' }}>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              Your Consent
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8' }}>
              By using our website and services, you consent to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="bg-white" style={{ paddingLeft: '200px', paddingRight: '200px', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#EBEEF3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', color: '#222222' }}>
              Terms and Conditions
            </h1>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8' }}>
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              By accessing and using Bold Energy's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              2. Services Description
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy provides solar energy solutions including:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
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
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              3. Service Agreement and Installation
            </h2>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Quote and Proposal
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              All quotes and proposals are valid for 30 days from the date of issue unless otherwise specified. Pricing is subject to change based on site conditions, permit requirements, and material costs.
            </p>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Installation Process
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Installation timelines are estimates and may vary due to weather conditions, permit delays, utility company requirements, and other factors beyond our control. We will make reasonable efforts to complete installation within the estimated timeframe.
            </p>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Permits and Approvals
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy will obtain all necessary permits and approvals for solar installation. However, the customer is responsible for providing access to their property and ensuring compliance with homeowners association (HOA) requirements, if applicable.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              4. Payment Terms
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Payment terms vary based on the financing option selected:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li><strong>Purchase:</strong> Payment terms will be outlined in your service agreement. Typically includes a deposit upon contract signing and final payment upon installation completion.</li>
              <li><strong>Financing:</strong> Financing terms are subject to credit approval through our lending partners. Monthly payments and interest rates will be detailed in your loan agreement.</li>
              <li><strong>TPO/Lease:</strong> Monthly lease or power purchase agreement (PPA) payments will be outlined in your TPO agreement.</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Late payments may result in additional fees and potential service interruption. We reserve the right to suspend services for non-payment.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              5. Warranties and Guarantees
            </h2>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Equipment Warranties
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Solar panels, inverters, and other equipment come with manufacturer warranties. Typical warranties include:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>Solar panels: 25-year performance warranty</li>
              <li>Inverters: 10-25 year warranty (depending on manufacturer)</li>
              <li>Batteries: 10-year warranty (if applicable)</li>
            </ul>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Installation Warranty
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy provides a workmanship warranty covering installation defects for a period specified in your service agreement. This warranty covers labor and installation-related issues but does not cover damage caused by extreme weather, acts of God, or improper use.
            </p>
            <h3 className="font-bold mb-4 mt-8" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#385887' }}>
              Performance Guarantee
            </h3>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              While we provide energy production estimates, actual performance may vary based on weather conditions, shading, system maintenance, and other environmental factors. Estimated savings are based on current utility rates and are not guaranteed.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              6. Customer Responsibilities
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Customers are responsible for:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
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
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              7. Cancellation and Refund Policy
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Customers have the right to cancel their service agreement within the legally required cooling-off period (typically 3 business days) for a full refund of any deposits paid.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              After the cooling-off period, cancellation fees may apply based on work completed:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li>Before permits are pulled: Cancellation fee equal to administrative costs</li>
              <li>After permits are obtained: Non-refundable permit and design fees</li>
              <li>After installation begins: Payment for work completed plus restocking fees</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              8. Limitation of Liability
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy's liability is limited to the cost of the solar system installation. We are not liable for:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
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
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              9. Intellectual Property
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              All content on the Bold Energy website, including text, graphics, logos, images, and software, is the property of Bold Energy and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without written permission.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              10. Dispute Resolution
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Any disputes arising from these terms or our services shall be resolved through:
            </p>
            <ul style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '40px', listStyleType: 'disc' }}>
              <li><strong>Negotiation:</strong> Initial attempt to resolve through direct communication</li>
              <li><strong>Mediation:</strong> If negotiation fails, both parties agree to participate in mediation</li>
              <li><strong>Arbitration:</strong> Binding arbitration in accordance with the American Arbitration Association rules</li>
            </ul>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              This agreement shall be governed by the laws of the state of Connecticut.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              11. Indemnification
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              You agree to indemnify and hold Bold Energy harmless from any claims, losses, damages, or expenses arising from your violation of these terms or misuse of our services.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              12. Force Majeure
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to: natural disasters, government actions, labor disputes, material shortages, pandemics, or utility company delays.
            </p>
          </div>

          {/* Section 13 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              13. Modifications to Terms
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              Bold Energy reserves the right to modify these terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              14. Severability
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these terms shall otherwise remain in full force and effect.
            </p>
          </div>

          {/* Section 15 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222' }}>
              15. Contact Information
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px' }}>
              For questions about these Terms and Conditions, please contact:
            </p>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              <strong>Bold Energy</strong>
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              30 Old Kings Hwy S, Darien, Suite #1001, CT 06820
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              Email: info@bold.energy
            </div>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '10px' }}>
              Phone: 123-456-7890
            </div>
          </div>

          {/* Agreement Section */}
          <div style={{ backgroundColor: '#385887', padding: '40px', borderRadius: '10px' }}>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#FFFFFF' }}>
              Agreement
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', lineHeight: '1.8' }}>
              By using Bold Energy's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
