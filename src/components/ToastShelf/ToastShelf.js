import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import {ToastContext} from '../ToastProvider';

import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
    const {toasts} = React.useContext(ToastContext);

    const {closeAllToasts} = React.useContext(ToastContext);

    useEscapeKey(closeAllToasts);

    return (
        <ol className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification">
            {toasts.map((toast) => {
                return (<li className={styles.toastWrapper} key={toast.id}>
                    <Toast toast={toast}/>
                </li>)
            })}
        </ol>
    );
}

export default ToastShelf;
