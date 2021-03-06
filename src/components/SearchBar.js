import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import './SearchBar.css'

function SearchBar () {

    const search = (e) => {
        console.log("Searching.....")
    }

    return (
        <>
            <InputGroup className="mb-3 s-bar">
                <Button variant="dark" onClick={search}>Search</Button>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </>
    )
}

export default SearchBar;