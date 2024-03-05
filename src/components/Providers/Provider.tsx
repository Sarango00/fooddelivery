"use client";

import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Footer, Header } from "..";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import { AuthProvider } from "./Authprovider";
import { EmailContext, EmailProvider } from "./Emailprovider";

export const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <EmailProvider>
          <AuthProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
          </AuthProvider>
        </EmailProvider>
      </ThemeProvider>
      <CssBaseline />
    </AppRouterCacheProvider>
  );
};
