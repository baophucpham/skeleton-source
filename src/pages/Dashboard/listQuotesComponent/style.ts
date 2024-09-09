import styled from '@emotion/styled';

const ListQuotesComponent = styled('div')`
    width: 100%;
    .viewSreach {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .searchGroups {
        display: flex;
        align-items: center;
    }
    .ant-input-affix-wrapper-lg {
        border-radius: 0px;
        height: 41px;
    }
    .viewSort {
        display: flex;
        align-items: center;
    }
    .titleSort {
        margin-right: 16px;
        color: #4f4f4f;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    .highlight-row {
        background-color: #f7faff !important;
        box-sizing: border-box;
    }
    .viewGroupsActions {
        width: 70px;
        display: flex;
        justify-content: space-between;
    }
    .actionIcon {
        cursor: pointer;
    }
    .viewNumPage {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #4f4f4f;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        position: relative;
        bottom: 40px;
    }
    .chooseNumPage {
        display: flex;
        width: 69px;
        height: 36px;
        padding: 0px 8px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: 1px solid #ccc;
        background: #fff;
        cursor: pointer;
    }
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
   
    .quoteTitleColumn {
        width: 450px;
    }
    .quoteRefColumn {
        width: 13%;
    }
    .clientNameColumn {
        width: 13%;
    }
    .departureDateColumn {
        width: 13%;
    }
    .highlight-row:hover{
        color: #069;
        border: 1px solid #069;
    }
    .custom-row{
        box-sizing: border-box;
    }
    .custom-row:hover{
        color: #069;
        border: 1px solid #069 !important;
    }
    .ant-table-row:hover{
        border: 1px solid #069 !important;
    }
`;

export default ListQuotesComponent;
