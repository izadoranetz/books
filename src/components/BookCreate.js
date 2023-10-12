import {useState} from 'react';

export function BookCreate({onCreate}) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    
    
    const handleSubmit = (event) => { 
        // para não reiniciar a página ao clicar em submit
        event.preventDefault();
        onCreate(title);
        // para apagar o texto do input após o mesmo ter sido enviado
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" name="title" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}