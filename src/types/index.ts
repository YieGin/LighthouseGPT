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
