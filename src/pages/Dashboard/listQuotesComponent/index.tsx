import React, { useEffect, useRef, useState } from 'react';
import ListQuotesComponent from './style';
import DropdownCustom from 'src/components/dropdownCustom';
import { Input, Popover, Table } from 'antd';
import icons from 'src/assets/icon';
import { listSearch, listSort, showColumOnPage } from 'src/const/enum';
import ModalComponent from 'src/components/modalCustom';
import VersionModal from './VersionModal';
import NotFound from '../../../components/NotFoundData';
import { useDispatch, useSelector } from 'react-redux';
import { listQuoteSelector } from 'src/redux/selectors/listQuoteSelecter';
import { getListAction } from 'src/redux/actions/getListAction';
import moment from 'moment';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';

const ViewTableComponent = () => {
    const [page, setPage] = useState<number>(10);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const listQuote = useSelector(listQuoteSelector);
    const [dataList, setDataList] = useState<any>([]);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const [debouncedValue, setDebouncedValue] = useState<string>('');
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [numberItem, setNumberItem] = useState<number>(0);

    const callListQuote = () => {
        if (!debouncedValue) {
            if (selectedValue === null) {
                dispatch(getListAction(''));
            }
            setDataList(listQuote);
            return;
        }
    
        let query = '';
        switch (selectedValue) {
            case 'Quote Ref':
                query = `?quoteRef=${debouncedValue}`;
                break;
            case 'Client Name':
                query = `?clientName=${debouncedValue}`;
                break;
            default:
                query = `?quoteRef=${debouncedValue}`;
                break;
        }
    
        if (typeof debouncedValue === 'number') {
            setDataList([]);
            setLoading(false);
        } else {
            dispatch(getListAction(query));
            setDataList(listQuote);
        }
    };

    const sortDataByUpdatedDate = (data: any[]) => {
        return data.sort((a, b) => {
            const dateA = new Date(a.updatedDate).getTime();
            const dateB = new Date(b.updatedDate).getTime();
            return dateB - dateA;
        });
    };

    useEffect(() => {
        const sortedData = sortDataByUpdatedDate(listQuote);
        setDataList(sortedData);
        setNumberItem(listQuote.length);
        if (dataList.length > 0) {
            setLoading(false);
            setNumberItem(listQuote.length);
        }
        console.log(listQuote);
    }, [listQuote]);

    useEffect(() => {
        callListQuote();
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [debouncedValue, selectedValue, debouncedValue]);

    const handleDataSort = (value: any) => {
        const sortedList = [...dataList].sort((a: any, b: any) => {
            const dateA =
                value === 'Updated date'
                    ? new Date(a.updatedDate || '').getTime()
                    : new Date(a.createdDate || '').getTime();
            const dateB =
                value === 'Updated date'
                    ? new Date(b.updatedDate || '').getTime()
                    : new Date(b.createdDate || '').getTime();
            return dateB - dateA;
        });
        setDataList(sortedList);
    };

    const eventCopyLink = (event: any) => {
        event.stopPropagation();
    };

    const eventDownLoadFile = (event: any) => {
        event.stopPropagation();
    };

    const showModal = (event: any) => {
        event.stopPropagation();
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        setSearchValue(e.target.value);

        if (value === debouncedValue) {
            return;
        }

        debounceTimeout.current = setTimeout(() => {
            setDebouncedValue(value);
            setLoading(true);
            setDataList([]);
            setNumberItem(0);
        }, 1000);
    };
    const clearSreach = () => {
        setSearchValue('');
        setDebouncedValue('');
        dispatch(getListAction(''));
    };

    const columns = [
        {
            title: 'Quote Ref',
            dataIndex: 'quoteRef',
            key: 'quoteRef',
            className: 'quoteRefColumn',
        },
        {
            title: 'Quote Title',
            dataIndex: 'quoteTitle',
            key: 'quoteTitle',
            className: 'quoteTitleColumn',
        },
        {
            title: 'Departure Date',
            dataIndex: 'departureDate',
            key: 'departureDate',
            className: 'departureDateColumn',
            render: (text: string) => (
                <div>{moment(text).format('MMM D YYYY')}</div>
            ),
        },
        {
            title: 'Client Name',
            dataIndex: 'clientName',
            key: 'clientName',
            className: 'clientNameColumn',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text: string, record: any) => {
                return (
                    <div className="viewGroupsActions">
                        <Popover content={'Copy quote link'}>
                            {record.status !== 'Draft' ? (
                                <img
                                    alt=""
                                    className="actionIcon"
                                    src={icons.shareLink}
                                    onClick={eventCopyLink}
                                />
                            ) : (
                                <img
                                    alt=""
                                    className="actionIcon"
                                    src={icons.shareLinkDisable}
                                    onClick={eventCopyLink}
                                />
                            )}
                        </Popover>
                        <img
                            alt=""
                            className="actionIcon"
                            src={icons.download}
                            onClick={eventDownLoadFile}
                        />
                        <img
                            alt=""
                            className="actionIcon"
                            src={icons.clockIcon}
                            onClick={showModal}
                        />
                    </div>
                );
            },
        },
    ];

    const handleChangePagination = (data: string) => {
        setPage(Number(data));
    };
    const handleRowClick = (item: any) => {
        window.open(
            `/quoteDetail/introduction?id=${item.id}&type=${item.type}`,
            'Preview mode',
        );
    };

    const handleDataChange = (value: string) => {
        setSelectedValue(value);
        setSearchValue('');
        setDebouncedValue('');
        dispatch(getListAction(''));
    };

    return (
        <ListQuotesComponent>
            <div className="viewSreach">
                <div className="searchGroups">
                    <DropdownCustom
                        defaultItem={'Quote Ref'}
                        dataItem={listSearch}
                        ondataChange={handleDataChange}
                        search={true}
                    />
                    <div>
                        <Input
                            size="large"
                            placeholder={
                                selectedValue === 'Quote Ref' ||
                                selectedValue === null
                                    ? 'Enter quote number here'
                                    : 'Please enter your client name'
                            }
                            value={searchValue}
                            onChange={handleInputChange}
                            className="viewSearch"
                            prefix={
                                <img
                                    alt=""
                                    className="iconfile"
                                    src={icons.searchIcon}
                                />
                            }
                            suffix={
                                loading ? (
                                    <LoadingOutlined spin />
                                ) : (
                                    debouncedValue && (
                                        <CloseOutlined onClick={clearSreach} />
                                    )
                                )
                            }
                        />
                    </div>
                    {debouncedValue &&
                        dataList.length > 0 &&
                        dataList.length < 20 && (
                            <div className="totalResponse">
                                {`${numberItem} result(s) found.`}
                            </div>
                        )}
                </div>
                <div className="viewSort">
                    <span className="titleSort">Sort by</span>
                    <DropdownCustom
                        defaultItem={'Updated date'}
                        dataItem={listSort}
                        ondataChange={handleDataSort}
                    />
                </div>
            </div>
            {dataList.length > 0 ? (
                <div>
                    {numberItem > 0 ? (
                        <div>
                            <Table
                                dataSource={dataList}
                                columns={columns}
                                pagination={{ pageSize: page }}
                                rowClassName={(record, index) =>
                                    index % 2 === 0
                                        ? 'highlight-row'
                                        : 'custom-row'
                                }
                                onRow={(record) => {
                                    return {
                                        onClick: () => handleRowClick(record), // Click event for the row
                                    };
                                }}
                            />
                            <div className="viewNumPage">
                                <span>Items per page</span>
                                <DropdownCustom
                                    defaultItem={page}
                                    dataItem={showColumOnPage}
                                    isNotPagination={false}
                                    ondataChange={handleChangePagination}
                                />
                            </div>
                            <ModalComponent
                                width={1201}
                                visible={isModalVisible}
                                onClose={handleClose}
                                title="Quote ID UK050757 - Previous versions"
                                content={<VersionModal />}
                            />
                        </div>
                    ) : (
                        <div>
                            {loading ? (
                                <NotFound
                                    content={
                                        <div>
                                            Please wait, your results are on the
                                            way.
                                        </div>
                                    }
                                />
                            ) : (
                                <NotFound
                                    content={
                                        <div>
                                            <div>
                                                <div className="allViewMess">
                                                    Hmm... Sorry we couldn’t
                                                    find any matches for{' '}
                                                    <div className="debouncedView">
                                                        {' '}
                                                        "{debouncedValue}".
                                                    </div>
                                                </div>
                                                <div
                                                    className="clearSreach"
                                                    onClick={clearSreach}
                                                >
                                                    Clear search & Show all
                                                    results
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <NotFound
                        content={
                            <div>
                                <div>
                                    We're sorry, but there are no items to
                                    display at this time. Please check back
                                    later
                                </div>
                            </div>
                        }
                    />
                </div>
            )}
        </ListQuotesComponent>
    );
};

export default ViewTableComponent;
