import Accounts from "../Accounts/Accounts";
import CardsData from "../CardsData/CardsData";
import CustomTabsUi from "../ui/CustomTabsUi";
export default function HomeData() {



  const tabsData = [
    {
      name: "Home",
      component: "HomeData Tabs",
    },
    {
      name: "Accounts",
      component: <Accounts />,
    },
    {
      name: "Send Money",
      component: "HomeData Tabs",
    },
    {
      name: <CardsData/>,
      component: "HomeData Tabs",
    },
    {
      name: "FD/RD",
      component: "HomeData Tabs",
    },
    {
      name: "Bills & Recharge",
      component: "HomeData Tabs",
    },
    {
      name: "Loans",
      component: "HomeData Tabs",
    },
    {
      name: "Invest",
      component: "Invest",
    },
    {
      name: "Insure",
      component: "Insure",
    },
  ];

  return (
    <>
      Navbar will come
      <CustomTabsUi tabs={tabsData} />
    </>
  );
}
