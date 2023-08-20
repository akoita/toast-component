import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, closeHandler}) {
    console.log(toasts);
    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast) => {
                return (<li className={styles.toastWrapper} key={toast.id}>
                    <Toast  toast={toast} closeHandler={closeHandler}/>
                </li>)
            })}
        </ol>
    );
}

export default ToastShelf;
