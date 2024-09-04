import React, { useState } from 'react';
import ListQuotesComponent from './style';
import DropdownCustom from 'src/components/dropdownCustom';
import { Button, Input, Modal, Popover, Table } from 'antd';
import icons from 'src/assets/icon';
import {
    dataSource,
    listSearch,
    listSort,
    showColumOnPage,
} from 'src/const/enum';
import ModalComponent from 'src/components/modalCustom';

const ViewTableComponent = () => {
    const [page, setPage] = useState<number>(5);
    const [open, setOpen] = useState<boolean>(false)

    const showModal = () => {
        setOpen(!open);
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
            title: 'Departure date',
            dataIndex: 'departureDate',
            key: 'departureDate',
            className: 'departureDateColumn',
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
            render: (text: string, record: any) => (
                <div className="viewGroupsActions">
                    <Popover content={'Copy quote link'}>
                        <img
                            alt=""
                            className="actionIcon"
                            src={icons.shareLink}
                        />
                    </Popover>
                    <img alt="" className="actionIcon" src={icons.download} />
                    <img
                        alt=""
                        className="actionIcon"
                        src={icons.clockIcon}
                        onClick={showModal}
                    />
                </div>
            ),
        },
    ];

    const handleChangePagination = (data: string) => {
        setPage(Number(data));
        console.log(data, 'hjgjghjgjhgjh');
    };
    return (
        <ListQuotesComponent>
            <div className="viewSreach">
                <div className="searchGroups">
                    <DropdownCustom
                        defaultItem={'Search by Quote Ref'}
                        dataItem={listSearch}
                    />
                    <div>
                        <Input
                            size="large"
                            placeholder="Search"
                            prefix={
                                <img
                                    alt=""
                                    className="iconfile"
                                    src={icons.searchIcon}
                                />
                            }
                        />
                    </div>
                </div>
                <div className="viewSort">
                    <span className="titleSort">Sort by</span>
                    <DropdownCustom
                        defaultItem={'Newest'}
                        dataItem={listSort}
                    />
                </div>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: page }}
                rowClassName={(record, index) =>
                    index % 2 === 0 ? 'highlight-row' : ''
                }
            />
            <div className="viewNumPage">
                <span>Items per page</span>
                <DropdownCustom
                    defaultItem={'5'}
                    dataItem={showColumOnPage}
                    isNotPagination={false}
                    ondataChange={handleChangePagination}
                />
            </div>
            <ModalComponent isShow={open}/>
        </ListQuotesComponent>
    );
};

export default ViewTableComponent;
