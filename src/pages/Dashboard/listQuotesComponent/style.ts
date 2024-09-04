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
`;

export default ListQuotesComponent;
