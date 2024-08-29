import React from 'react';
import DashboardStyle from './styled';
import images from 'src/assets/image';
import icons from 'src/assets/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'antd';
import { columns, dataSource } from 'src/const/enum';

const DashboardComponent = () => {
    return (
        <DashboardStyle>
            <div className="menuDashboard">
                <img alt="" className="LogoIMG" src={images.logoYGT} />
                <div className="btnQuotes">
                    <img alt="" className="iconfile" src={icons.iconFile} />
                    <div>Quotes</div>
                    <img alt="" className="iconfile" src={icons.arrowRight} />
                </div>
                <div className="btmAdmin">
                    <FontAwesomeIcon className="avatar" icon={faCircleUser} />
                    <div>
                        <div className="nameSeller">Amanda</div>
                        <div className="position">Sale Expert</div>
                    </div>
                    <img alt="" className="iconfile" src={icons.arrowDown} />
                </div>
            </div>
            <div className="tableDashboard">
                <div className="showNameSeller">Hi Amanda</div>
                <div className="table">
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{ pageSize: 7 }}
                    />
                </div>
            </div>
        </DashboardStyle>
    );
};

export default DashboardComponent;
