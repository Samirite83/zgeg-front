import "./globals.css";

export const metadata = {
  title: "ZGEG Squad",
  description: "FR Squad Team providing quality content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="luxury"
      className="snap-y snap-mandatory overflow-y-scroll scroll-smooth"
    >
      <body>{children}</body>
    </html>
  );
}
