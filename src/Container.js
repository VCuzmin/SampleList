import React, { useState, useRef } from 'react';
import List from "./List";

const initialList = [{ id: 1, value: "test" }, { id: 2, value: 'test' }, { id: 3, value: 'test' }, { id: 4, value: 'test' }, { id: 5, value: 'test' }];

const useHookWithRef = value => {
    const ref = useRef(value);
    const [, forceUpdate] = useState();
    const getValue = () => ref.current;
    const setValue = newValue => {
        ref.current = newValue;
        forceUpdate({});
    }
    return [getValue, setValue]
}

const Container = (props) => {

    const [list, setList] = useState(initialList);
    // const [getValue, setValue] = useHookWithRef(initialList);

    const rowPropertyChange = index => prop => event => {
        let newList = Object.assign([...list], { [index]: { ...list[index], [prop]: event.target.value } });
        setList(newList);
        // let newList = Object.assign([...getValue()], { [index]: { ...getValue()[index], [prop]: event.target.value } });
        //setValue(newList);
    }

    return (
        <List
            list={list}
            // list={getValue()}
            rowPropertyChange={rowPropertyChange}
        />
    )
}

export default Container;
