import React, {FC, useEffect, useState} from 'react';


import "./Ships.scss"
import {Ship} from "../../components/ship";
import {TShip} from "../../types";
import {Pagination} from "../../components/pagination";
import {ShipsProps} from "./types";

export const Ships: FC<ShipsProps> = ({ ships }) => {
    const [shipsPerPage] = useState(6);
    const [displayedShips, setDisplayedShips] = useState<TShip[]>([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        setDisplayedShips(ships.slice(pageNumber * shipsPerPage, (pageNumber + 1) * shipsPerPage));
    }, [pageNumber, ships, shipsPerPage]);

    const pageCount = Math.ceil(ships.length / shipsPerPage);

    const handlePageChange = (selected: number) => setPageNumber(selected);

    return (
        <div>
            <div className="container-section">
                {displayedShips.map((ship) => <Ship ship={ship} key={ship.id}/>)}
            </div>
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>

    )
}



