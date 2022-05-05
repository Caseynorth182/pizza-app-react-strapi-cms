import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [state, setState] = useState([]);
    const [send, setSend] = useState([])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=8')
            .then(({ data }) => {
                setState(data)
            })
    }, [])

    const onTitleChangeValue = (e) => {
        setTitle(e.target.value)
    }
    const onBodyChangeValue = (e) => {
        setBody(e.target.value)
    }

    const deleteItem = () => {
        setState(state.slice(0, -1))
    }

    const formSend = (event) => {
        console.log(event);
        event.preventDefault();
        const sendData = [title, body]

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body,
            userId: 1,
        })
            .then(function (response) {
                console.log(response.data);
                setSend([response.data])
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        var a = [].concat(state, send)
        console.log(a);
        setState(a)
    }, [send])
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <form onSubmit={formSend} >
                <input type="text" onChange={onTitleChangeValue} name='title' required />
                <input type="text" onChange={onBodyChangeValue} name='body' required />
                <button type="submit" className='btn btn-danger'>Button</button>
            </form>
            <div className="container">
                <h1>title {title}</h1>
                <h3>body {body}</h3>
                <div className="row">
                    {
                        state.map((item, i) => {
                            return (
                                <div key={`${item}_${i}`} className='col-lg-3 p-2'>
                                    <div className="card" >
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.text ? item.text : item.body}</p>
                                            <button onClick={() => deleteItem()} className="btn btn-primary">Go somewhere</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>


        </div>
    )
}

export default Test