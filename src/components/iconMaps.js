import {
  CodeIcon,
  DashboardIcon,
  GlobeIcon,
  LayersIcon,
  MonitorIcon,
  RocketIcon,
  UsersIcon,
  WrenchIcon,
} from './Icons'

/** Maps a skill group key (see src/data/profile.js) to its icon component. */
export const skillIcons = {
  code: CodeIcon,
  layers: LayersIcon,
  wrench: WrenchIcon,
  globe: GlobeIcon,
}

/** Maps a service key (see src/data/profile.js) to its icon component. */
export const serviceIcons = {
  monitor: MonitorIcon,
  dashboard: DashboardIcon,
  rocket: RocketIcon,
  users: UsersIcon,
}
