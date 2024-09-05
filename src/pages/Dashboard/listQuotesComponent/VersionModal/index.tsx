import React from 'react';
import VersionModalStyle from './style';
import icons from 'src/assets/icon';
import { Table } from 'antd';
import { dataVersion } from 'src/const/enum';

const VersionModal = () => {
    const columns = [
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
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: 'Version detail',
            dataIndex: 'vertionDetail',
            key: 'vertionDetail',
            className: 'vertionDetailColumn',
        },
        {
            title: 'Version Status',
            dataIndex: 'versionStatus',
            key: 'versionStatus',
        },
       
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text: string, record: any) => (
                <div className="viewGroupsActions">
                    <img alt="" className="actionIcon" src={icons.eyeIcon} />
                </div>
            ),
        },
    ];
    return (
        <VersionModalStyle>
            <Table
                dataSource={dataVersion}
                columns={columns}
                pagination={false}
                rowClassName={(record, index) =>
                    index % 2 === 0 ? 'highlight-row' : ''
                }
            />
        </VersionModalStyle>
    );
};

export default VersionModal;