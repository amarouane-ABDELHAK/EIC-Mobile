export const bufferSymbol = {
    type: 'simple-fill',
    color: [5, 80, 216, 0.4],
    outline: { color: [255, 255, 255, 1], width: 0.5 }
};

export const crosshairSymbol = {
    type: 'simple-marker',
    style: 'cross',
    color: [5, 80, 216],
    size: 8,
    outline: {
        color: [255, 255, 255],
        width: 1
    }
};

export const createCornerAngles = (point, sideLength) => {
    const halfSide = sideLength / 2;
    const cornerLines = [];

    const cornerLength = 1;
    const offset = 0.2;

    cornerLines.push(
        [
            [point.x - halfSide - offset, point.y - halfSide - offset],
            [
                point.x - halfSide + cornerLength - offset,
                point.y - halfSide - offset
            ]
        ],
        [
            [point.x - halfSide - offset, point.y - halfSide - offset],
            [
                point.x - halfSide - offset,
                point.y - halfSide + cornerLength - offset
            ]
        ],
        [
            [point.x + halfSide + offset, point.y - halfSide - offset],
            [
                point.x + halfSide - cornerLength + offset,
                point.y - halfSide - offset
            ]
        ],
        [
            [point.x + halfSide + offset, point.y - halfSide - offset],
            [
                point.x + halfSide + offset,
                point.y - halfSide + cornerLength - offset
            ]
        ],
        [
            [point.x + halfSide + offset, point.y + halfSide + offset],
            [
                point.x + halfSide - cornerLength + offset,
                point.y + halfSide + offset
            ]
        ],
        [
            [point.x + halfSide + offset, point.y + halfSide + offset],
            [
                point.x + halfSide + offset,
                point.y + halfSide - cornerLength + offset
            ]
        ],
        [
            [point.x - halfSide - offset, point.y + halfSide + offset],
            [
                point.x - halfSide + cornerLength - offset,
                point.y + halfSide + offset
            ]
        ],
        [
            [point.x - halfSide - offset, point.y + halfSide + offset],
            [
                point.x - halfSide - offset,
                point.y + halfSide - cornerLength + offset
            ]
        ]
    );

    return cornerLines.map((ring) => ({
        type: 'polyline',
        paths: ring,
        spatialReference: point.spatialReference
    }));
};
