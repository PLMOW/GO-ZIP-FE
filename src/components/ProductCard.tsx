import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dataForm } from 'pages/Load';

interface CardDataForm extends dataForm {
  images: any;
  member_id: number;
  post_id: number;
}

interface CardProps {
  data: CardDataForm;
}

const ProductCard = ({ data }: CardProps) => {
  const { title, description, house_type, city, images, member_id, post_id } =
    data;

  return (
    <Link key={`${title}_${city}`} to={`${post_id}`}>
      <Card>
        <Title>#{title}</Title>
        <Img src={images[0]} />
        <HashWrapper>
          <Hash>#{city}</Hash>
          <Hash>#{house_type}</Hash>
        </HashWrapper>
      </Card>
    </Link>
  );
};

export default ProductCard;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Card = styled.div`
  position: relative;
  height: 400px;
  gap: 10px;
  width: 490px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  transition: ${({ theme }) => theme.transitionOption};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.transparentColor};
  :hover {
    box-shadow: 0px 0px 15px ${({ theme }) => theme.transparentColor};
  }
`;

const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  background: rgba(222, 222, 222, 0.7);
  color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(2px);
  padding: 10px;
  font-weight: 600;
  font-size: 30px;
  width: 430px;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const HashWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  right: 10px;
  z-index: 3;
  white-space: nowrap;
`;

const Hash = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: rgba(232, 232, 232, 1);
  backdrop-filter: blur(2px);
  padding: 10px;
  border-radius: 5px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
