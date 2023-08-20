import React from 'react';

import Button from '../Button';


import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];



function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS);

    const [toasts, setToasts] = React.useState([]);


    function handlePopToast(event) {
        event.preventDefault();

        const id = crypto.randomUUID();
        const newToast = {message: message, variant: variant, id: id};
        setToasts([newToast, ...toasts]);

        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
    }

    function closeHandler(toastId) {
        const newToasts = toasts.filter(toast => toast.id !== toastId);
        setToasts(newToasts);
    }

    return (<div className={styles.wrapper}>
        <header>
            <img alt="Cute toast mascot" src="/toast.png"/>
            <h1>Toast Playground</h1>
        </header>

        <ToastShelf toasts={toasts} closeHandler={closeHandler}/>

        <form
            className={styles.controlsWrapper}
            onSubmit={event=> handlePopToast(event)}
        >
            <div className={styles.row}>
                <label
                    htmlFor="message"
                    className={styles.label}
                    style={{alignSelf: 'baseline'}}
                >
                    Message
                </label>
                <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput}
                      value={message}
                      onChange={event => {
                          setMessage(event.target.value);
                      }}
            />
                </div>
            </div>


            <div className={styles.row}>
                <div className={styles.label}>Variant</div>
                <div
                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >

                {VARIANT_OPTIONS.map(option => {
                    const id = `variant-${option}`;
                    return (
                        <label htmlFor={id} key={option}>
                            <input
                                type="radio"
                                name="variants"
                                id={`variant-${option}`}
                                value={option}
                                checked={variant === option}
                                onChange={event => {
                                    setVariant(event.target.value);
                                }}
                            />
                            {option}
                        </label>
                    );
                })}
                </div>
            </div>


            <div className={styles.row}>
                <div className={styles.label}/>
                <div
                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                    <Button>Pop Toast!</Button>
                </div>
            </div>
        </form>
    </div>);
}

export default ToastPlayground;
