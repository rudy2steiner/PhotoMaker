'use client';

export function SocialProof() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="Client 1" className="h-12 w-auto grayscale" />
          <img src="https://images.unsplash.com/photo-1611162616305-c69b3037c7bb" alt="Client 2" className="h-12 w-auto grayscale" />
          <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb" alt="Client 3" className="h-12 w-auto grayscale" />
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Trusted by 10,000+ users</span>
          </div>
        </div>
      </div>
    </section>
  );
}