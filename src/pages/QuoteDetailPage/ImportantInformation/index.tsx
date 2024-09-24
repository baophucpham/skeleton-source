import React from 'react';
import ImportantInformationStyle from './style';

interface ImportantInforProps {
    dataImportanInfor?: any;
}
interface BaseNode {
    data: any;
    content?: Node[];
    nodeType: string;
    marks?: any[];
}

interface TextNode extends BaseNode {
    nodeType: "text";
    value: string; // Chỉ có ở TextNode
}

type Node = BaseNode | TextNode; 
const ImportantInformationComponent: React.FC<ImportantInforProps> = ({
    dataImportanInfor,
}) => {
    const extractValues = (node: Node): string[] => {
        let values: string[] = [];
    
        if (Array.isArray(node.content)) {
            node.content.forEach((childNode: Node) => {
                // Kiểm tra nếu childNode là TextNode
                if (childNode.nodeType === "text") {
                    // Sử dụng type assertion để thông báo với TypeScript
                    const textNode = childNode as TextNode; // Kiểu này chắc chắn là TextNode
                    values.push(textNode.value); // Truy cập thuộc tính value
                } else {
                    // Gọi đệ quy cho các Node khác
                    values = values.concat(extractValues(childNode));
                }
            });
        }
    
        return values;
    };
    console.log(dataImportanInfor, 'dataImportanInfor');

    const valueStandard = extractValues(
        dataImportanInfor.quoteImportantNotesStandard,
    );
    const valueEvent = extractValues(dataImportanInfor.quoteImportantNotesTour);
    console.log(valueEvent,'valueEvent');

    return (
        <ImportantInformationStyle>
            <div className="title">Important Notes</div>
            <div className="content">
                {`Prices are based on twin occupancy of rooms, unless otherwise stated
All quotes are subject to availability at the time of booking
A non-refundable deposit of £35pp (IJ / Eire), £50pp (Europe) or £100pp (Rest of World) is required to secure your booking. Lor groups of 8 or more travelling to IJ / Eire, a non-refundable deposit of £200 per booking is required to secure your booking; for groups of 5 or more travelling to Europe, a non-refundable deposit of £200 per booking is required to secure your booking - in addition to this, the full deposit amount is required within 28 days of your initial group deposit payment. If you are booking a trip to a Tournament the special deposit required to secure a booking will be detailed within your quote. There may also be supplier deposits required to secure your booking; these will be detailed within the total deposits in the What's Included section of your personalised quote
Light Inclusive packages will require the full night price at point of booking unless otherwise stated.
Please note we require names as per passport and dates of birth
This quote is only valid for 48 hours
Vouchers must be applied at the time of booking and can not be applied retrospectively
View the full terms and conditions.
If the combination of travel services offered to you is a package within the meaning of the Package
Travel and Linked Travel Arrangements Regulations 2018 you will benezt from all rights applying to this
legislation. Your Golf Travel Utd will be fully responsible for the proper performance of the package as a whole.
Additionally, as required by law, Your Golf Travel Utd has protection in place to refund your payments
and, where transport is included in the package, to ensure your repatriation in the event that it becomes insolvent.`}
            </div>
        </ImportantInformationStyle>
    );
};

export default ImportantInformationComponent;
