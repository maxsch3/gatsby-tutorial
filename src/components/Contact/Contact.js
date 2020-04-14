import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="Contact" subtitle="Us" />
            <div className={styles.center}>
                <form
                    className={styles.form}
                    name="simple-contact-form"
                    accept-charset="utf-8"
                    action="https://formspree.io/email@domain.tld"
                    method="post"
                >
                    {/* <fieldset id="fs-frm-inputs"> */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="full-name"
                            className={styles.formControl}
                            placeholder="John Smith"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="_replyto"
                            id="email-address"
                            className={styles.formControl}
                            placeholder="jsmith@email.com"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Hello there"
                            rows="10"
                            className={styles.formControl}
                        ></textarea>
                    </div>
                    <input
                        type="hidden"
                        name="_subject"
                        id="email-subject"
                        value="Contact Form Submission"
                    ></input>
                    <div>
                        <input
                            type="submit"
                            Value="submit here"
                            className={styles.submit}
                        />
                    </div>
                    {/* </fieldset> */}
                </form>
            </div>
        </section>
    )
}

export default Contact
