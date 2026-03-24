import { AuthContextProvider as Week8AuthProvider } from "./week-8/_utils/auth-context";
import { AuthContextProvider as Week10AuthProvider } from "./week-10/_utils/auth-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Week8AuthProvider>
          <Week10AuthProvider>{children}</Week10AuthProvider>
        </Week8AuthProvider>
      </body>
    </html>
  );
}
