import {
  PopUpSubContainer,
  FilterPopUpHeading,
  CategoryItemsContainer,
  SortItem,
  ApplyButton,
  CategoryPopupContainer,
} from "../Transaction/styledComponents";

interface CategoryPopupProps {
  selectedCategoryOptions: string[];
  handleCategorySelection: (option: string) => void;
  categoryOptions: string[];
  closeCategoryPopup: () => void;
}

const categoryPopupVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

const CategoryPopup: React.FC<CategoryPopupProps> = ({
  selectedCategoryOptions,
  handleCategorySelection,
  categoryOptions,
  closeCategoryPopup,
}) => {
  return (
    <CategoryPopupContainer
      variants={categoryPopupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PopUpSubContainer>
        <FilterPopUpHeading>Choose Category</FilterPopUpHeading>
        <CategoryItemsContainer>
          {categoryOptions.map((category) => (
            <SortItem
              key={category}
              isselected={selectedCategoryOptions.includes(category)}
              onClick={() => handleCategorySelection(category)}
            >
              {category}
            </SortItem>
          ))}
        </CategoryItemsContainer>
        <ApplyButton onClick={closeCategoryPopup}>Done</ApplyButton>
      </PopUpSubContainer>
    </CategoryPopupContainer>
  );
};

export default CategoryPopup;
