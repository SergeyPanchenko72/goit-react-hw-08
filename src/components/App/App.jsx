// import css from "./App.module.css";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from "../ContactForm/ContactForm";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsError, selectIsLoading } from "../../redux/contacts/slice";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectIsLoading);
  //   const isError = useSelector(selectIsError);

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  return (
    // <div className={css.container}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {isLoading && <b>Loading...</b>}
    //   {isError && <b>Error...</b>}
    //   <ContactList />
    // </div>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
