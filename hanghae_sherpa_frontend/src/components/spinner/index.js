import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Flex>
      <ScaleLoader
        size={100}
        height='160'
        width='32'
        color='#77a464'
        radius='8px'
      />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
