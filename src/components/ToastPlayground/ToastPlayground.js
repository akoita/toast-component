import React from 'react';

import Button from '../Button';


import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

import {ToastContext} from '../ToastProvider';


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS);

    const { createToast} = React.useContext(ToastContext);


    function handlePopToast(event) {
        event.preventDefault();

        createToast(message, variant);

        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
    }


    return (
            <div className={styles.wrapper}>
                <header>
                    <img alt="Cute toast mascot" src="/toast.png"/>
                    <h1>Toast Playground</h1>
                </header>

                <ToastShelf/>

                <form
                    className={styles.controlsWrapper}
                    onSubmit={event => handlePopToast(event)}
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
            </div>
    );
}

export default ToastPlayground;
