import React from 'react';
import { Modal } from 'antd';
import ModalStyle from './style';

interface CustomModalProps {
    width?: number;
    visible: boolean;
    onClose: () => void;
    title?: string;
    content?: React.ReactNode;
    footer?: React.ReactNode;
}

const ModalComponent: React.FC<CustomModalProps> = ({
    width,
    visible,
    onClose,
    title,
    content,
    footer,
}) => {
    return (
        <ModalStyle>
            <Modal
                width={width ? width : 'auto'}
                title={title || ''}
                open={visible}
                onCancel={onClose}
                footer={footer || null}
            >
                {content}
            </Modal>
        </ModalStyle>
    );
};

export default ModalComponent;
