import {
  AddButtonContainer,
  TabBarItemContainer,
  TabBarItemImage,
  TabBarItemText,
  TabBarMainContainer,
  TabBarSubContainer,
} from "./styledComponents";

const TabBar = () => {
  return (
    <TabBarMainContainer>
      <TabBarSubContainer>
        <TabBarItemContainer>
          <TabBarItemImage src="/Images/home.svg" />
          <TabBarItemText>Home</TabBarItemText>
        </TabBarItemContainer>
        <TabBarItemContainer>
          <TabBarItemImage src="/Images/Transaction.svg" />
          <TabBarItemText>Transaction</TabBarItemText>
        </TabBarItemContainer>
        <AddButtonContainer>
          <TabBarItemImage src="/Images/Add.svg" />
        </AddButtonContainer>
        <TabBarItemContainer>
          <TabBarItemImage src="/Images/pie-chart.svg" />
          <TabBarItemText>Budget</TabBarItemText>
        </TabBarItemContainer>
        <TabBarItemContainer>
          <TabBarItemImage src="/Images/user.svg" />
          <TabBarItemText>Profile</TabBarItemText>
        </TabBarItemContainer>
      </TabBarSubContainer>
    </TabBarMainContainer>
  );
};

export default TabBar;
