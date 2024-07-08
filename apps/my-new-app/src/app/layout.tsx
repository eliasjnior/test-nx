import { testLib } from '@test-nx/test-lib';
import './global.css';

export const metadata = {
  title: 'Welcome to apps/my-new-app',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = testLib();

  return (
    <html lang="en">
      <title>{title}</title>
      <body>{children}</body>
    </html>
  );
}
