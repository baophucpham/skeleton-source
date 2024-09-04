import styled from '@emotion/styled';

const DropdownStyle = styled('div')`
    height: 41px;
    .ant-dropdown {
        min-width: auto !important;
    }
    .SearchByQuoteView {
        display: flex;
        align-items: center;
        cursor: pointer;
        border: 1px solid #e1e1e1;
        background: #f7faff;
        padding: 10px 16px 10px 16px;
        color: #4f4f4f;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
    }
    .SearchByQuoteView:hover {
        background: #deebff;
    }
    .iconSearchByQuote {
        width: 13px;
        height: 13px;
        fill: #4f4f4f;
        margin-left: 16px;
    }
    .SearchByQuoteView {
        display: flex;
        align-items: center;
        cursor: pointer;
        border: 1px solid #e1e1e1;
        background: #f7faff;
        padding: 10px 16px 10px 16px;
        color: #4f4f4f;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
    }
    .SearchByQuoteView:hover {
        background: #deebff;
    }
    .iconSearchByQuote {
        width: 13px;
        height: 13px;
        fill: #4f4f4f;
        margin-left: 16px;
    }
    .dropdown-content {
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 1;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        background-color: #ffffff;
        border: 1px solid #dcdcdc;
    }
    .itemOption {
        color: #4f4f4f;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.5px;
        padding: 10px 16px 10px 16px;
    }
    .itemOption:hover {
        background-color: #f7faff;
    }
`;

export default DropdownStyle;
