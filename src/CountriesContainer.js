import { useState, useReducer } from "react"

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const componentIsMounted = useRef(true);
    const [filterInput, setFilterInput] = useReducer(
        (state,newState) => ({...state, ...newState}),
        {
            name: "",
            capital: "",
            population: ""
        }
    );

    const handleFilterCountries = event =>{
        const {name, value} = event.target;
        setFilterInput({[name]: value});
    }
}