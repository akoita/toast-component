import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
    const { toasts} = React.useContext(ToastContext);

    const { closeAllToasts } = React.useContext(ToastContext);



    React.useEffect(() => {
        window.addEventListener('keydown', (event) => {
            // Handle space bar key press inside the window
            if (event.code === 'Escape') {
                // Escape bar was pressed inside the window
                console.log('Escape bar pressed inside the window');
                closeAllToasts();
            }
        });
    }, []);


    return (
        <ol className={styles.wrapper} >
            {toasts.map((toast) => {
                return (<li className={styles.toastWrapper} key={toast.id}>
                    <Toast  toast={toast}/>
                </li>)
            })}
        </ol>
    );
}

export default ToastShelf;
