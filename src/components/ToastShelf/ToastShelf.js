import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
    const { toasts} = React.useContext(ToastContext);

    console.log(toasts);
    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast) => {
                return (<li className={styles.toastWrapper} key={toast.id}>
                    <Toast  toast={toast}/>
                </li>)
            })}
        </ol>
    );
}

export default ToastShelf;
