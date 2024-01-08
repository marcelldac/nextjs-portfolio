import '@mantine/core/styles.css';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import { Inter } from 'next/font/google';
import { theme } from '../theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcell Dactes',
  description: 'Portfolio de um desenvolvedor full-stack com foco em back-end',
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link
          rel='icon'
          href='/favicon.png'
          sizes='any'
        />
      </head>
      <html lang='en'>
        <body className={inter.className}>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </html>
    </>
  );
}
