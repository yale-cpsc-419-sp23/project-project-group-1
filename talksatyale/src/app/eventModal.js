import styles from './page.module.css'

import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function EventModal({ event, onClose }) {
    return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <FaRegBookmark size={40} className={styles.modalBookmark}/>
                <h2 className={styles.modalTitle}>{event.title}</h2>
                <div className={styles.modalClose} onClick={onClose}>
                    <FaTimes />
                </div>

            </div>
            <div className={styles.modalSubHeader}>
                <h4 className={styles.modalDept}>{event.department}</h4>
                <h4 className={styles.addCalendar}>|</h4>
                <h4><a href="https://calendar.google.com" className={styles.addCalendar}> add to Google Calendar</a></h4>

            </div>
            <hr className={styles.hLine}></hr>

            <div className={styles.modalBody}>
                <p className={styles.modalDesc}>{event.description}</p>
            </div>

            <div className={styles.modalDetails}>
                <div className={styles.modalRow}>
                    <h4 className={styles.modalLabel}>Date</h4>
                    <h4 className={styles.modalDetail}>{event.date}</h4>
                </div>
                <div className={styles.modalRow}>
                    <h4 className={styles.modalLabel}>Time</h4>
                    <h4 className={styles.modalDetail}>{event.time}</h4>
                </div>
                <div className={styles.modalRow}>
                    <h4 className={styles.modalLabel}>Speaker</h4>
                    <h4 className={styles.modalDetail}>{event.speaker}</h4>
                </div>
                <div className={styles.modalRow}>
                    <h4 className={styles.modalLabel}>Location</h4>
                    <h4 className={styles.modalDetail}>{event.location}</h4>
                </div>
            </div>
            <hr className={styles.hLine}></hr>
            <h4 className={styles.modalFriends}>Inssia, Martin, Alan, and others have saved this event.</h4>


        </div>
    </div>
    )
}
