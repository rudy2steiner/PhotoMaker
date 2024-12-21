import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function CommunityPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Community</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-4">
              Connect with other PhotoMaker users, share your creations, and learn from
              the community. Join discussions, get inspiration, and stay updated on the
              latest features and techniques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>Be respectful and supportive</li>
              <li>Share knowledge and experiences</li>
              <li>Give credit when using others' work</li>
              <li>Report inappropriate content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Share Your Work</h3>
                <p className="text-muted-foreground">
                  Show off your best PhotoMaker creations and get feedback from the community.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Help Others</h3>
                <p className="text-muted-foreground">
                  Share your knowledge and help other members improve their skills.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}