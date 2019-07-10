import React from 'react';
import { TableBody } from "@material-ui/core";
import Item from './Item';

const List = ({ list, rowPropertyChange }) =>
    <TableBody>
        {list.map((item, index) => {
            return (<Item
                key={index}
                item={item}
                rowPropertyChange={rowPropertyChange(index)}
            />
            )
        })}
    </TableBody>

export default List;
