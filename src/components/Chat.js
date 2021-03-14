import React, { useState } from "react";
import "./Chat.css";
import ThumbsUp from "./ThumbsUp.svg";
import ThumbsDown from "./ThumbsDown.svg";
import QuestionMark from "./QuestionMark.svg";
import { Navbar, Nav, Form, Button, ButtonGroup, Container, Jumbotron, Modal} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';


const Chat = (props) => {
    const [messages, setMessages] = useState('');
    const [modalShow, setModalShow] = React.useState(false);

    const addMessage = (messages) => {
        setMessages([...messages, { messages: messages, id: uuid() }]);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(messages);  
        addMessage(messages);
        //console.log
        setMessages('');
        
    }
    

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                GatorComs
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>GatorComs Survey</h4>
              <p>
                Thank you for using this application! Please fill out the survey here: *Survey link here* 
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/Home">GatorComs</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#">Translate</Nav.Link>
                <Nav.Link href="#">Transcript</Nav.Link>
                <Nav.Link  onClick={() => setModalShow(true)}>End</Nav.Link>
                
                </Nav>
            </Navbar>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            
            <Container>
            <h1 id="title">Location A {'->'} Location B</h1>
            
            <Jumbotron id="chat-field" class="scrollbar">
                {Object.keys(messages).map(message => { 
                    return ( <p key={message.id}>{message}</p> );
                })}    
            </Jumbotron>

            <div>
                <Form onSubmit={handleSubmit} class="form-inline" >
                    <Form.Control as="textarea" rows={3} placeholder="Type Message" required value={messages} onChange={(event) => setMessages(event.target.value)}/>
                    <Button id="button-margin" variant="primary" type="submit" value="new message" block>Submit</Button>

                <ButtonGroup>
                    <Button variant="outline-primary"><img id="button-image" src={ThumbsUp} alt="Thumbs-Up"></img></Button>
                    <Button variant="outline-primary"><img id="button-image" src={QuestionMark} alt="Question-Mark"></img></Button>
                    <Button variant="outline-primary"><img id="button-image" src={ThumbsDown} alt="Thumbs-Down"></img></Button>
                </ButtonGroup>
                </Form>
            </div>
            
            </Container>
        </div>
    );
}


export default Chat
