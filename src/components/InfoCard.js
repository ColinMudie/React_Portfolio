import Card from "react-bootstrap/Card";

function InfoCard() {
    return (
        <Card className="card-custom" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Hello!</Card.Title>
                <Card.Text>
                    I am a fullstack web developer who currently lives in Mt. Pleasant, MI.
                    Feel free to look at some of my projects.
                </Card.Text>
                <Card.Text>
                    If you're looking for help on a future project contact me here so we can talk!
                </Card.Text>
                <Card.Text>
                    Phone: (248)-924-7877
                </Card.Text>
                <Card.Text>
                    Phone: <Card.Link href="mailto:csmudie1@gmail.com">csmudie1@gmail.com</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InfoCard;