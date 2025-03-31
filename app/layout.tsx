import { MainLayout } from "../components/layout/MainLayout";
import { Provider } from "../components/ui/provider";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
