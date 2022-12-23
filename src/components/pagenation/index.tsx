import React, { useState } from "react";
import "./style.css";
import Pagination from 'react-bootstrap/Pagination';

const IPagination = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination bsPrefix="p-main-color pagination">{items}</Pagination>
    );
};

export default IPagination;
