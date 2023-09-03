import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import {ToastContext} from '../ToastProvider';

function ToastShelf() {
    const {toasts} = React.useContext(ToastContext);

    const {closeAllToasts} = React.useContext(ToastContext);


    React.useEffect(() => {
        function handleKeyDown(event) {
                // Handle space bar key press inside the window
                if (event.code === 'Escape') {
                    // Escape bar was pressed inside the window
                    closeAllToasts();
                }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


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
