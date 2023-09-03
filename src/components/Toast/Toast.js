import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

import {ToastContext} from '../ToastProvider';


const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({toast}) {
    const Icon = ICONS_BY_VARIANT[toast.variant];

    const {dismissToast} = React.useContext(ToastContext);


    return (
        <div className={`${styles.toast} ${styles[toast.variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24}/>
            </div>
            <div className={styles.content}>
                <div className="VisuallyHidden_wrapper">
                    {toast.variant} -
                </div>
                <p>{toast.message}</p>
            </div>
            <button className={styles.closeButton} onClick={() => dismissToast(toast.id)}
                    aria-label="Dismiss message"
                    aria-live="off"
            >
                <X size={24}/>
            </button>
        </div>
    );
}

export default Toast;
