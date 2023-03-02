import React, {FC} from 'react';
import {ShipProps} from './types';

import "./Ship.scss"
import {Image} from "../image";

export const Ship: FC<ShipProps> = ({ship}) => (
        <div className="card">
            <div className="card-inner">
                    <Image
                        src={`https://glossary-wows-global.gcdn.co/icons/${ship.icons.large}`}
                        alt={ship.name}
                        width="400px" height="300px"
                    />
                <div className="text">
                    <div>{ship.name}</div>
                    <br/>
                    <div>{ship.nation}</div>
                </div>
            </div>
        </div>
    )
