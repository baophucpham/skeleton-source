import React, { useEffect, useState } from 'react';
import WhatOutGolferSayComponentStyle from './style';
import { getImageApi } from 'src/api/apiGetImage';
import { Skeleton } from 'antd';

interface WhatOutGolferSayProps {
    imageId?: string;
    title?: string;
    content?: string;
}

const WhatOutGolferSayComponent: React.FC<WhatOutGolferSayProps> = ({
    imageId,
    title,
    content,
}) => {
    const [data, setData] = useState<any>();

    const iconData = `https:${data?.fields?.file?.url}`;

    useEffect(() => {
        if (imageId) {
            const fetchData = async () => {
                try {
                    const response = await getImageApi(imageId);
                    setData(response);
                } catch (err) {
                    setData(null);
                }
            };
            fetchData();
        }
    }, [imageId]);

    return (
        <WhatOutGolferSayComponentStyle className="groupWhyItem">
            {data ? (
                <div>
                    <img alt="" className="iconWhy" src={iconData} />
                    <p className="titleItem">{title}</p>
                    <p className="discriptionItem">{content}</p>
                </div>
            ) : (
                <Skeleton.Image active={true} />
            )}
        </WhatOutGolferSayComponentStyle>
    );
};

export default WhatOutGolferSayComponent;
