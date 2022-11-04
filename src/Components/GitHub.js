import React from "react"
import Card from "react-bootstrap/Card"
import Profile from './Profile.jpg'

function GitHub() {
    return (
        <div className="card">
            <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={Profile}/>
                <Card.Body>
                    <Card.Title>Martiz C. Ware</Card.Title>
                    <Card.Text>
                        My name is Martiz and I like to hang out with my friends when I can and go to the gym.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHub