import { FaInfoCircle } from "react-icons/fa";

import styles from './index.module.css'

export function BoxAlert({ type }) {
  return (
    <div className={`${styles.boxAlert} ${styles[type]}`}>
      {type === 'empty' && (
        <>
          <FaInfoCircle size={36} />
          <p>Список дел пуст.</p>
        </>
      )}

      {type === 'warning' && (
        <>
          <FaInfoCircle size={36} />  
          <p>
          Не удалось найти ни одного дела,
          попробуйте еще раз с другим названием.
          </p>
        </>
      )}
    </div>
  )
}