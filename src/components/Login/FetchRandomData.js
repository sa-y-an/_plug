import React, {useEffect, useState} from 'react'

function FetchRandomData() {

    const [blogs, setBlogs] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect( () => {
        fetch(`https://randomuser.me/api/`)
        .then( (res) => {
            return res.json();
        } )
        .then( (data) => {
            console.log(data.results[0].name.first)
            console.log(data.results[0].picture.thumbnail)
            setBlogs(data);
            setPending(false);
        })
    }, [])

    return (
        <div>

        </div>
    )
}

export default FetchRandomData