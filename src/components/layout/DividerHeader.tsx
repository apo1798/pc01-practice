import styled from '@emotion/styled';
import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const HeaderContainer = styled.div`
  margin: 1rem auto 0;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const DividerLine = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid black;
`;

const DividerHeader = ({ title }: Props) => {
  return (
    <HeaderContainer>
      <Typography component="h5" fontWeight="600" variant="h5">
        {title}
      </Typography>
      <DividerLine />
    </HeaderContainer>
  );
};
export default DividerHeader;
