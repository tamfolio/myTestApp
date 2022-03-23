import React, { useState } from 'react'

function Search({ getQuery}) {

    const[text, setText]= useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <h1>Search</h1>
            <form>
                <input
                type='text'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
