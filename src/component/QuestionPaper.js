import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'
import './QuestionPaper.css'
import Btn from './Btn'
const QuestionPaper = () => {
  const [Data, setData] = useState([])
  const [qno, setqno] = useState(0);
  useEffect(() => {
    quizData();
  }, [qno]);
  const count = () => {
    setqno(
      qno + 1
    )
  }
  const quizData = async () => {
    try {
      const quiz = await axios.get(`http://localhost:3004/questions`);
      // setData(quiz.data)
      console.log(qno)
      console.log(quiz.data)
      setData(quiz.data.slice(qno, qno + 1)[0]);
    } catch (err) {
      console.log("Something Went Wrong lllllllllll");
    }
  };
  return (
    <>
      <div className='quiiz' >
        <Card className='mt-5 quizCard' style={{ width: '38rem' }} >
          {Data &&
            <>
              <Card.Title>{Data.question}</Card.Title>
              {console.log(Data.questionoption)}
              {Data.questionoption &&
                Data.questionoption.map((ele) => {
                  console.log(ele)
                  return (
                    <>
                      <ListGroup variant="flush">
                        <ListGroup.Item>  <input setval=" " type="radio" name="option"
                        />{ele.optionvalue}   </ListGroup.Item>
                      </ListGroup>
                    </>
                  )
                })}
              <Card.Footer className="text-muted" onClick={count}> <Btn >Next</Btn></Card.Footer>
            </>
          }
          {!Data && <>
            <Btn>Submit</Btn>
          </>
          }
        </Card>
      </div>
    </>
  )
}

export default QuestionPaper