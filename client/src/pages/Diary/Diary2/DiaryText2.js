import styled from "styled-components";
import { MdOutlineChangeCircle } from "react-icons/md";

const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "700px")};
  height: ${(props) => (props.height ? props.height : "55px")};
  padding: 0 18px;
  border-radius: 35px;
  box-shadow: 0 0 5px 2px #63aeae;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TextArea = styled(InputContainer)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  padding: 0;
`;

const QuestionArea = styled.div`
  color: #535353;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid #63aeae;
  padding: 25px 32px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

const Question = styled.div`
  color: #535353;
  font-size: 14px;
  /* 
  font-size: 16px;
  font-family: "shinbttf"; */
`;

const WriteArea = styled.div`
  width: 100%;
  padding: 25px 32px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
`;
const DiaryWrite = styled.textarea`
  width: 100%;
  height: 360px;
  color: #535353;
  resize: none;
  overflow: hidden;
  outline: none;
  border: none;
  background: none;
  font-family: "shinbttf";
  font-size: 16px;
`;
const RandomArea = styled.div`
  display: flex;
  align-items: center;
`;

const NumCount = styled.div`
  margin-right: 5px;
`;

const Error = styled.div`
  color: red;
`;
const DiaryText2 = ({ question, setQuestion, counter, setCounter, randomQuestions, register, errors }) => {
  let pop = Math.floor(Math.random() * randomQuestions.length);
  const onClickHandler = () => {
    if (counter >= 3) {
      counter = 3;
    } else {
      setQuestion(randomQuestions[pop]);
      setCounter(counter + 1);
    }
  };

  return (
    <TextArea>
      <QuestionArea>
        <Question>Random Question : {question}</Question>
        <RandomArea>
          <NumCount>{counter}/3</NumCount>
          <MdOutlineChangeCircle size="20" color="#63AEAE" onClick={onClickHandler} />
        </RandomArea>
      </QuestionArea>
      <WriteArea>
        <DiaryWrite
          placeholder="이곳에 여행일지를 기록 해주세요."
          name="diary"
          {...register("diary", { required: { value: true, message: "일기를 입력해주세요." } })}
        ></DiaryWrite>
        {errors.diary && <Error role="alert">{errors.diary.message}</Error>}
      </WriteArea>
    </TextArea>
  );
};
export default DiaryText2;
