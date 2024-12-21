'use client';

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {children}
    </div>
  );
}