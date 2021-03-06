import React from 'react';
import { Grid, Text } from '../elements';
import { useSelector } from 'react-redux';

const MypageText = () => {
  const _todo_num = useSelector((state) => state.graph.todo_num);
  console.log(_todo_num);
  const [comment, setComment] = React.useState('');
  const [emoji, setEmoji] = React.useState('');
  const commentArr = [
    'π§ββοΈπ§ββοΈ ? λ΄ νμ΄μ€μ λ§μΆ° κ°μ!',
    'πΆββοΈπΆββοΈ ? μ μ μ§νκ³  μμ΄μ! μ§κΈμ²λΌ κΎΈμ€νκ²!',
    `πββοΈπββοΈ ? μμ²­λ μλμμ! κ°λμ©μ μ¬μ΄κ°λ μ’μμ!`,
  ];

  React.useEffect(() => {
    if (_todo_num <= 2) {
      setComment(commentArr[0].split('?')[1]);
      setEmoji(commentArr[0].split('?')[0]);
    } else if (_todo_num > 2 && _todo_num <= 5) {
      setComment(commentArr[1].split('?')[1]);
      setEmoji(commentArr[1].split('?')[0]);
    } else {
      setComment(commentArr[2].split('?')[1]);
      setEmoji(commentArr[2].split('?')[0]);
    }
  }, [_todo_num]);

  return (
    <React.Fragment>
      <Grid width='340px' height='200px' margin='auto' is_flex>
        <Text bold size='30px'>
          {emoji}
        </Text>
        <Text bold size='35px'>
          {comment}
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default MypageText;
