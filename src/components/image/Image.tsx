import React, {FC} from 'react';
import {ImageProps} from "./types";

export const Image: FC<ImageProps> = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} loading="lazy" width={width} height={height} />;
};