import "./categories-menu.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoriesMenu = (props) => {
  return (
    <div className={props.className}>
      <div className="categories-container">
        {props.categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesMenu;
