import React, { useState } from 'react';
import ListQuotesComponent from './style';
import DropdownCustom from 'src/components/dropdownCustom';
import { Input, Popover, Table } from 'antd';
import icons from 'src/assets/icon';
import {
    dataSource,
    listSearch,
    listSort,
    showColumOnPage,
} from 'src/const/enum';
import ModalComponent from 'src/components/modalCustom';
import VersionModal from './VersionModal';
import NotFound from '../../../components/NotFoundData';
import { useHistory } from 'react-router-dom';

const ViewTableComponent = () => {
    const [page, setPage] = useState<number>(5);
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
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
    };
    const handleRowClick=(item:any)=>{
        console.log(item,'kjhkkjhkhk')
        history.push('/quoteDetail');
    }
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
            {dataSource ? (
                <div>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{ pageSize: page }}
                        rowClassName={(record, index) =>
                            index % 2 === 0 ? 'highlight-row' : 'custom-row'
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
                            defaultItem={'5'}
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
                <NotFound
                    content={
                        <div>
                            <div>
                                Hmm... Sorry we couldn’t find any matches for
                                “Abc”.
                            </div>
                            <div>
                                Please double check your search for any typos or
                                spelling errors, or change your search terms.
                            </div>
                            <div>Clear search & Show all results</div>
                        </div>
                    }
                />
            )}
        </ListQuotesComponent>
    );
};

export default ViewTableComponent;
