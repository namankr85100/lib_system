import React,{Component} from 'react';
import {Row,Col, Card, CardText, CardHeader, CardFooter, CardBody,CardTitle } from 'reactstrap';
import Loading from './LoadingComponent';
function RenderBook({book,isStudent}) {
    if (book != null)
        return(
        <Card>
       
       <CardHeader tag="h3">{book.name} &nbsp; &nbsp; &nbsp;&nbsp;
        </CardHeader>
        <CardBody color='red'>
          <CardTitle align="right"> - {book.author}</CardTitle>
          <CardText>
              <b>Category: </b> <h5>{book.cat}</h5> <br/>
              <b> ISBN number: </b> <h5>{book.isbn}</h5> <br/>
              <b>Description: </b><br/> <h5>{book.description}</h5> <br/>
             <b> Copies available : </b> <h5>{book.copies}</h5> <br/>
             <b> friend name : </b> <h5>{book.friend} </h5><br/>
             <b> issue type : </b> <h5>{book.issue_type}</h5>  <br/>
      </CardText><br/>
        </CardBody>
        <CardFooter className="text-muted">
        <Row>
        <Col md={6}>
        {/* Created at : {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit', hour: 'numeric',minute: 'numeric', hour12: true }).format(new Date( Date.parse(book.createdAt)))}     */}
        </Col>
        <Col md={6}>
        {/* Last updated at : {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit',hour: 'numeric',minute: 'numeric', hour12: true}).format(new Date( Date.parse(book.updatedAt)))}  */}
        </Col>
        </Row>
        </CardFooter>
        </Card>
        );
    else
        return(
            <div></div>
        );
        }


class StudentBookDetail extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
render(){
  if (this.props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (this.props.errMess) {
    return(
        <div className="container loading">
            <div className="row heading"> 
                <div className="col-12">
                    <br/><br/><br/><br/>
                    <h3>{this.props.errMess}</h3>
                </div>
            </div>
        </div>
    );
}
else
    return(

        <div className="container full">
        <div className="row heading">
          <div className="col-12">
          <br/>        <br/>
          {
              this.props.books.map((book)=>{
                  return <RenderBook book={book} />

              })
          }
          

        <br/>
          </div>
        </div>
      </div>
        );
}

}

export default StudentBookDetail;