import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = (props) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    return navigate(props.category.route);
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage bgImage={props.category.imageUrl} />
      <Body>
        <h2>{props.category.title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
