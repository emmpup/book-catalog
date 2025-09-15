import Book from "./Book.jsx";

function App() {
    return (
        <div>
            <div className='header'>
                <h1>Book Catalog</h1>
            </div>
            <div className='content'>
                <div className='add'>
                    <h2>New</h2>
                </div>
                <Book
                    author='Beena Ammanath'
                    link='https://itbook.store/books/9781119867920'
                    image='https://itbook.store/img/books/9781119867920.png'
                />
                <Book
                    author='Daniel Vaughan'
                    link='https://itbook.store/books/9781492060949'
                    image='https://itbook.store/img/books/9781492060949.png'
                />
            </div>
            <div className='footer'>
                <h4>&copy; Emily Misola, 2025</h4>
            </div>
        </div>
    );
}

export default App;
