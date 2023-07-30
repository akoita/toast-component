import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState('notice');

    const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


    return (<div className={styles.wrapper}>
        <header>
            <img alt="Cute toast mascot" src="/toast.png"/>
            <h1>Toast Playground</h1>
        </header>

        <div className={styles.controlsWrapper}>
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


            <fieldset>
                <legend>
                    Variant
                </legend>

                {VARIANT_OPTIONS.map(option => (<div key={option}>
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
                    <label htmlFor={`variant-${option}`}>
                        {option}
                    </label>
                    <br/>
                </div>))}
            </fieldset>

            <div className={styles.row}>
                <div className={styles.label}/>
                <div
                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                    <Button>Pop Toast!</Button>
                </div>
            </div>
        </div>
    </div>);
}

export default ToastPlayground;
