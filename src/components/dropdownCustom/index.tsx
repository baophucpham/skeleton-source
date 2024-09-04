import React, { useEffect, useState } from 'react';
import DropdownStyle from './style';
import icons from 'src/assets/icon';

interface ItemDopdownProps {
    dataItem?: any;
    defaultItem?: any;
    isNotPagination?: boolean;
    ondataChange?: (data: any) => void;
}

const DropdownCustom: React.FC<ItemDopdownProps> = ({
    dataItem = [],
    defaultItem,
    isNotPagination = true,
    ondataChange
}) => {
    const [dataOption, setDataOption] = useState<[]>([]);
    const [option, setOption] = useState<any>(defaultItem);
    const [arrowPagination, setArrowPagination] = useState<boolean>(true);
    const [show, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        setDataOption(dataItem);
        setArrowPagination(isNotPagination);
    }, [isNotPagination]);

    const showMenu = () => {
        setIsShow(!show)
    };

    const changeOption = (item: any) =>{
            setOption(item)
            ondataChange?.(item)
            setIsShow(!show)

    }
    return (
        <DropdownStyle>
            <div className="SearchByQuoteView" onClick={() => showMenu()}>
                <span>{option}</span>
                <img
                    alt=""
                    className="iconSearchByQuote"
                    src={arrowPagination ? icons.arrowDown : icons.stateLayer}
                />
            </div>
            {show && (
                <div id="myDropdown" className="dropdown-content">
                    {dataOption.map((item: any, index) => {
                        return (
                            <div key={index}>
                                <div className="itemOption" onClick={()=>changeOption(item.label)}>{item.label}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </DropdownStyle>
    );
};

export default DropdownCustom;
