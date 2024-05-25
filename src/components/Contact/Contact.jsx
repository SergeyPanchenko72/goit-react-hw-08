// import css from "./Contact.module.css";
// import { BsFillPersonFill } from "react-icons/bs";
// import { BsTelephoneFill } from "react-icons/bs";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";

// export default function Contact({ contact: { name, number, id } }) {
//   const dispatch = useDispatch();
//   return (
//     <div className={css.container}>
//       <div>
//         <p>
//           <BsFillPersonFill className={css.icon} />
//           {name}
//         </p>

//         <p>
//           <BsTelephoneFill className={css.icon} />
//           {number}
//         </p>
//       </div>
//       <button
//         type="button"
//         className={css.button}
//         onClick={() => {
//           dispatch(deleteContact(id));
//         }}
//       >
//         Delete
//       </button>
//     </div>
//   );
// }
