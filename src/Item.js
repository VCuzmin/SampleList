import React from 'react';
import { TableCell, TableRow, TextField } from "@material-ui/core";

const areEqual = propsExcluded => (prevProps, nextProps) => {
    return Object.keys(prevProps).filter(x => !propsExcluded.includes(x))
        .every(key => {
            return prevProps[key] === nextProps[key];
        });
}

const Item = React.memo(({ item, rowPropertyChange }) => {

    console.log("test");

    return (
        <TableRow>
            <TableCell>
                <TextField
                    fullWidth
                    required
                    value={item.value}
                    onChange={rowPropertyChange('value')}
                />
            </TableCell>
        </TableRow>
    )
}, areEqual(['rowPropertyChange']));

export default Item;
