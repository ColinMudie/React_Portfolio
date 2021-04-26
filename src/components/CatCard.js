import Card from "react-bootstrap/Card";


function CatCard () {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/assets/images/tchalla.png'/>
            <Card.Body>
                <Card.Title>T'challa</Card.Title>
                <Card.Text>
                    Here's my cat T'challa, he helps me code by either sleeping on my lap or by attempting to knock over any
                    glass on my desk.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CatCard;