import React from 'react';
import { Grid, Text } from '../elements';
import { useSelector } from 'react-redux';

const MypageText = () => {
  const _todo_num = useSelector((state) => state.graph.todo_num);
  console.log(_todo_num);
  const [comment, setComment] = React.useState('');
  const commentArr = [
    '🧍‍♀️🧍‍♂️ 잠시 쉬어갈 시간이 필요하시군요!',
    '🚶‍♀️🚶‍♂️ 잘 유지하고 있어요! 지금처럼 꾸준하게!',
    `🏃‍♀️🏃‍♂️ 
    엄청난 속도에요! 
    가끔씩은 쉬어가도 좋아요!`,
  ];

  React.useEffect(() => {
    if (_todo_num <= 2) {
      setComment(commentArr[0]);
    } else if (_todo_num > 2 && _todo_num <= 5) {
      setComment(commentArr[1]);
    } else {
      setComment(commentArr[2]);
    }
  }, [_todo_num]);

  return (
    <React.Fragment>
      <Grid width='340px' height='200px' margin='auto' is_flex>
        <Text bold size='25px'>
          {comment}
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default MypageText;
