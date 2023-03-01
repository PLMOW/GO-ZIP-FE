import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dataForm } from 'pages/Load';

interface CardDataForm extends dataForm {
  images: any;
  id: number;
}

interface CardProps {
  data: CardDataForm;
}

const ProductCard = ({ data }: CardProps) => {
  console.log(data);
  const { title, description, house_type, city, images, id } = data;
  return (
    <Link key={`${title}_${city}`} to={`${id}`}>
      <Card>
        <Img src={images[0]} />
        <Information>
          <div>title : {title}</div>
          <div>city : {city}</div>
          <div>type : {house_type}</div>
          <div>description : {description}</div>
        </Information>
      </Card>
    </Link>
  );
};
export default ProductCard;

const Img = styled.img`
  height: 300px;
  border-radius: 5px;
`;

const Card = styled.div`
  padding: 10px;
  height: 400px;
  gap: 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Information = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
