import { BarChartIcon, HomeIcon, InsightsIcon, PieChartIcon, ResearcherIcon, SettingsIcon } from "@/components/ui/icons";
import { MenuItemType, SessionsType } from "@/types";


export const menuItemsData: MenuItemType[] = [
  { Icon: HomeIcon, title: "LighthouseGPT" },
  { Icon: InsightsIcon, title: "Market Insights" },
  { Icon: ResearcherIcon, title: "LHAI Researcher" },
  { Icon: PieChartIcon, title: "LHAI Analysis" },
  { Icon: BarChartIcon, title: "LHAI Advisor" },
  { Icon: SettingsIcon, title: "Setting" },
];


export const SessionsList: SessionsType[] = [
  {
    Icon: '/icons/Loan-hand.svg',
    title: "Business loans",
    description: "It is a long established "
  },
  {
    Icon: '/icons/briefcase.svg',
    title: "Checking accounts",
    description: "It is a long established "
  },
  {
    Icon: '/icons/cart-save.svg',
    title: "Savings accounts",
    description: "It is a long established "
  },
  {
    Icon: '/icons/card-talk.svg',
    title: "Debit and credit cards",
    description: "It is a long established "
  },
  {
    Icon: '/icons/Insurance.svg',
    title: "Life Insurance",
    description: "It is a long established "
  },
]