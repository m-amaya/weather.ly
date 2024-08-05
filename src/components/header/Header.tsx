import {
  ActionIcon,
  AppShell,
  Group,
  Image,
  Switch,
  Text,
  Title,
  Tooltip,
  useMantineTheme
} from "@mantine/core";
import { PiMagnifyingGlassDuotone as SearchIcon } from "react-icons/pi";
import { WiCloudy as CloudyIcon } from "react-icons/wi";
import classes from "./Header.module.css";

export function Header() {
  const theme = useMantineTheme();

  return (
    <AppShell.Header px="md">
      <Group align="center" h="100%" justify="space-between">
        <Group align="center">
          <Image height={32} src="/logo.png" />
          <Title className={classes.title}>Weather.ly</Title>
        </Group>
        <Group>
          <Group gap={8}>
            <CloudyIcon color={theme.colors.gray[6]} size={32} />
            <Text>90 ℉</Text>
            <Text>Round Rock, TX 78665</Text>
          </Group>
          <Switch
            size="lg"
            offLabel={<Text>℉</Text>}
            onLabel={<Text>℃</Text>}
          />
          <Tooltip label="Enter zip code">
            <ActionIcon size="lg" variant="subtle">
              <SearchIcon size={24} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
