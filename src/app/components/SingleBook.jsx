import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

function reduceText(testo, lunghezzaMassima) {
  // Verifica se la lunghezza del testo supera quella massima
  if (testo.length > lunghezzaMassima) {
    // Accorcia il testo e aggiunge puntini alla fine
    return testo.slice(0, lunghezzaMassima) + "...";
  } else {
    // Restituisci il testo inalterato se non supera la lunghezza massima
    return testo;
  }
}

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          className={this.state.selected ? "selected" : ""}
          onClick={() => {
            this.setState({ selected: !this.state.selected });
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className="card-img"
          />
          <Card.Body>
            <Card.Title>{reduceText(this.props.book.title, 20)}</Card.Title>
            <Card.Text>
              Categoria:&nbsp;
              {this.props.book.category}
            </Card.Text>
            <Card.Text>
              Prezzo:&nbsp;
              {this.props.book.price}
              <strong>$</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea id={this.props.book.asin} />}
      </>
    );
  }
}

export default SingleBook;
