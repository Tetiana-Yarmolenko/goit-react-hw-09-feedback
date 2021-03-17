import React from 'react'
import s from './ContactList.module.css'

// При використанні цього шаблону рендериться лише: (дані name, phone - не відображаються ).
// Не можу зрозуміти, що не вірно роблю?

// const ContactListItem = ({ id, name, phone, onRemove }) => {
//     return (
//         <li key={id} className={s.item}>
//             {name}:{phone}
//             <button className={s.button} type='button' onClick={()=>onRemove(id)}>Delete</button>
//         </li>
//     )
    
// }
// const ContactList = ({ contacts, onRemove }) => {
//     if (contacts.length === 0) return null
//     return (
//         <ul className={s.list}>
//             {contacts.map(({ contact }) => (< ContactListItem {...contact} onRemove={onRemove}/>))}
//         </ul>
//     )
// }

function ContactList({ contacts, onRemove }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, phone, id }) => (
        <li key={id} className={s.item}>
          {name}: {phone}
          <button
            className={s.button}
            type="button"
            onClick={() => onRemove (id)}>
            Delete
          </button>
        </li>))}
    </ul>
  );
}

export default ContactList