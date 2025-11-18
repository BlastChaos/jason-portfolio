"use client";

export function Providers({ children }: { children: React.ReactNode }) {
  //TODO: Add theme provider
  return (
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >

    // </ThemeProvider>
    <>{children}</>
  );
}
