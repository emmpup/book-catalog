import "./book.css";

function Book(props) {
    return (
        <div className='container'>
            <img src={props.image} className='image' />
            <div className='author'>
                <p>by</p> <h4>{props.author}</h4>
            </div>
            <a href={props.link} target='_blank' className='link'>
                Learn more
            </a>
        </div>
    );
}

export default Book;
