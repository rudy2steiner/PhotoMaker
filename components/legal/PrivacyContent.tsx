'use client';

export function PrivacyContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <p className="text-muted-foreground">
              We collect and process personal information necessary to provide our services, including:
              email addresses, usage data, and uploaded images. This information is handled in accordance
              with applicable data protection laws.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Image Processing</h3>
            <p className="text-muted-foreground">
              Images uploaded to our platform are processed solely for the purpose of providing our AI
              transformation services. We implement strict security measures to protect your content.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Security Measures</h3>
            <p className="text-muted-foreground">
              We employ industry-standard security protocols to protect your data:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud storage with regular security audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>
      </section>
    </div>
  );
}