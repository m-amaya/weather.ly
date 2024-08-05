import { AppShell } from "@mantine/core";
import { Header } from "@src/components/header";
import { Hero } from "@src/components/hero/Hero";
import { PageContent } from "@src/components/pageContent";

export function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <Header />
      <AppShell.Main>
        <Hero />
        <PageContent />
      </AppShell.Main>
    </AppShell>
  );
}
