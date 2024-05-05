import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from '@/components/home/footer/footer.module.scss'
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina para devs",
  description: "Oficina de carros especializada, atendendo todos os devs do Brasil.",
  keywords: ["oficina", "oficina carros", "manutenção de carros"],
  openGraph: {
    title: "DevMotors - Sua oficina para devs",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo-betinho-g.png`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}

        <p className={styles.copyText}>
          gt3dev | Todos os direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
