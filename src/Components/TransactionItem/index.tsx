import { NavigationEvents } from '../../Constants/EventHandlers';
import { ListItem, ListItemContentsContainer, PriceContainer, CategoryHeading, PriceHeading, DescriptionContainer, DescriptionHeading, TimeElement } from '../Transaction/styledComponents';
import { useNavigate } from 'react-router-dom';

interface DetailsInterface{
    id: string;
    name: string
    money: string
    description: string
    time: string
    imageUrl: string
  }

interface DetailsInterfaceProps{
    item: DetailsInterface
}

const TransactionItem: React.FC<DetailsInterfaceProps> = ({ item }) => {
  const navigate = useNavigate();

  const {navigateToTransactionDetails} = NavigationEvents()

  return (
    <ListItem onClick = {()=> navigateToTransactionDetails(item.id)}>
      <img src={item.imageUrl} alt={item.name} />
      <ListItemContentsContainer>
        <PriceContainer>
          <CategoryHeading>{item.name}</CategoryHeading>
          <PriceHeading>-${item.money}</PriceHeading>
        </PriceContainer>
        <DescriptionContainer>
          <DescriptionHeading>{item.description}</DescriptionHeading>
          <TimeElement>{item.time}</TimeElement>
        </DescriptionContainer>
      </ListItemContentsContainer>
    </ListItem>
  );
};

export default TransactionItem;
