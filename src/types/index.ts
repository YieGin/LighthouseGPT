export type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export type MenuItemType = {
  Icon: React.ComponentType<{ isActive: boolean }>;
  title: string;
}

export type SessionsType = {
  Icon: string;
  title: string;
  description: string;
}