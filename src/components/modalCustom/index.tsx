import React, { ReactNode, useEffect, useState } from 'react';
import ModalStyle from './style';
import { Modal } from 'antd';

interface ModalProps {
    isShow?: boolean;
    children?: ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ isShow = false, children }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(isShow, 'muonting');
        setOpen(isShow);
        return () => {
            setOpen(!open);
            console.log(open,'unmuont')
          };
    }, [isShow]);

    const handleOk = () => {
        setLoading(true);
    };

    const handleCancel = () => {
        setOpen(!open);
    };

    return (
        <ModalStyle>
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                // footer={[
                //     <Button key="back" onClick={handleCancel}>
                //         Return
                //     </Button>,
                //     <Button
                //         key="submit"
                //         type="primary"
                //         loading={loading}
                //         onClick={handleOk}
                //     >
                //         Submit
                //     </Button>,
                //     <Button
                //         key="link"
                //         href="https://google.com"
                //         type="primary"
                //         loading={loading}
                //         onClick={handleOk}
                //     >
                //         Search on Google
                //     </Button>,
                // ]}
            >
                {children && children}
            </Modal>
        </ModalStyle>
    );
};

export default ModalComponent;
