import styled from '@emotion/styled';

const VersionModalStyle = styled('div')`
    .table {
        width: 100%;
        border: 1px solid #ccc;
        background: #fff;
        /* shadow */
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        padding: 24px;
    }
    .ant-table-thead th {
        background-color: #12b897 !important;
        color: white !important;
        font-weight: bold;
        text-align: center;
    }
    .ant-table-thead .ant-table-cell {
        border-radius: 0px !important;
    }
    .viewGroupsActions {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .actionIcon{
        cursor: pointer;
    }
`;

export default VersionModalStyle;
