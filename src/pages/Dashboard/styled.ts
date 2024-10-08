import styled from '@emotion/styled';

const DashboardStyle = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    background: #f5f5f5;
    position: fixed;
    .menuDashboard {
        width: 14%;
        display: flex;
        padding: 24px 20px 24px 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        /* shadow */
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
    }
    .tableDashboard {
        width: 86%;
        padding: 49px 64px 49px 64px;
        overflow-x: auto;
    }
    .LogoIMG {
        width: 150px;
        height: 54px;
    }
    .btnQuotes {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #12b897;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
    .avatar {
        width: 32px;
        height: 32px;
    }
    .btmAdmin {
        width: 100%;
        display: flex;
        color: #4f4f4f;
        justify-content: space-between;
        cursor: pointer;
    }
    .nameSeller {
        color: #4f4f4f;
        font-size: 16px;
        font-weight: 400;
    }
    .position {
        color: #4f4f4f;
        font-size: 12px;
        font-weight: 400;
    }
    .showNameSeller {
        color: #4f4f4f;
        font-size: 38px;
        font-weight: 700;
    }
    .table {
        width: 100%;
        border: 1px solid #ccc;
        background: #fff;
        /* shadow */
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        padding: 24px;
    }
    .menuBtn {
        width: 100%;
        height: 50%;
    }
    .ant-btn-default {
        border: none !important;
    }
    .ant-popover-inner-content .logOutBtn {
        cursor: pointer !important;
    }
    .dropdown-content-login {
        position: fixed;
        bottom: 31px;
        left: 200px;
        bottom: 12px;
        display: flex;
        flex-direction: column;
        z-index: 12;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        background-color: #ffffff;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        padding: 10px 16px 10px 16px;
        cursor: pointer !important;
    }

    .headerTable {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 35px;
    }
    @media screen and (max-width: 768px) {
        .menuDashboard {
            width: 20%;
        }
        .LogoIMG {
            width: 100%;
        }
        .tableDashboard {
            width: 80%;
            padding: 29px 24px 29px 24px;
        }
    }
`;
export default DashboardStyle;
