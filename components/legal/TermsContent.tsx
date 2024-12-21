'use client';

export function TermsContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">License to Use</h3>
            <p className="text-muted-foreground">
              PhotoMaker grants you a limited, non-exclusive, non-transferable license to use our
              services for personal or commercial purposes, subject to these terms and applicable laws.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Intellectual Property</h3>
            <p className="text-muted-foreground">
              You retain all rights to your original content. By using our service, you grant PhotoMaker
              a limited license to process and transform your content as requested through our platform.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">User Obligations</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">Users agree to:</p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of their account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not misuse or attempt to exploit our services</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            PhotoMaker provides its services "as is" and "as available." We make no warranties,
            express or implied, regarding the reliability, availability, or suitability of our services
            for any particular purpose.
          </p>
          <p className="text-muted-foreground">
            To the maximum extent permitted by law, PhotoMaker shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages resulting from your use or
            inability to use our services.
          </p>
        </div>
      </section>
    </div>
  );
}