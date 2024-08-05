import { Container, Tabs } from "@mantine/core";
import classes from "./PageContent.module.css";

export function PageContent() {
  return (
    <Tabs variant="outline">
      <Tabs.List className={classes.tabList} defaultValue="today">
        <Tabs.Tab
          classNames={{ tab: classes.tab, tabLabel: classes.tabLabel }}
          value="today"
        >
          Today
        </Tabs.Tab>
        <Tabs.Tab
          classNames={{ tab: classes.tab, tabLabel: classes.tabLabel }}
          value="hourly"
        >
          Hourly
        </Tabs.Tab>
        <Tabs.Tab
          classNames={{ tab: classes.tab, tabLabel: classes.tabLabel }}
          value="threeDay"
        >
          3 Day
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="today">
        <Container p="md">Today Panel</Container>
      </Tabs.Panel>
      <Tabs.Panel value="hourly">
        <Container p="md">Hourly Panel</Container>
      </Tabs.Panel>
      <Tabs.Panel value="threeDay">
        <Container p="md">3-Day Panel</Container>
      </Tabs.Panel>
    </Tabs>
  );
}
