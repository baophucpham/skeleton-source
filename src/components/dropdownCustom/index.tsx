import React, { useEffect, useRef, useState } from 'react';
import DropdownStyle from './style';
import icons from 'src/assets/icon';

interface ItemDopdownProps {
    search?:boolean
    dataItem?: any;
    defaultItem?: any;
    isNotPagination?: boolean;
    ondataChange?: (data: any) => void;
}

const DropdownCustom: React.FC<ItemDopdownProps> = ({
    dataItem = [],
    defaultItem,
    isNotPagination = true,
    ondataChange,
    search
}) => {
    const [dataOption, setDataOption] = useState<[]>([]);
    const [option, setOption] = useState<any>(defaultItem);
    const [arrowPagination, setArrowPagination] = useState<boolean>(true);
    const [show, setIsShow] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        setDataOption(dataItem);
        setArrowPagination(isNotPagination);
    }, [dataItem, isNotPagination]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsShow(false); 
            }
        };
        document.addEventListener('click', handleClickOutside); 
        return () => {
            document.removeEventListener('click', handleClickOutside); 
        };
    }, [dropdownRef]);

    const showMenu = () => {
        setIsShow(!show); 
    };

    const changeOption = (item: any) =>{
        setOption(item);
        ondataChange?.(item);
        setIsShow(false); 
    };

    return (
        <DropdownStyle>
            <div className="SearchByQuoteView" onClick={showMenu} ref={dropdownRef}>
                <span>{search&&'Search by'}{' '}{option}</span>
                <img
                    alt=""
                    className="iconSearchByQuote"
                    src={arrowPagination ? icons.arrowDown : icons.stateLayer}
                />
            </div>
            {show && (
                <div id="myDropdown" className="dropdown-content">
                    {dataOption.map((item: any, index) => (
                        <div key={index}>
                            <div className="itemOption" onClick={() => changeOption(item.label)}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DropdownStyle>
    );
};

export default DropdownCustom;
