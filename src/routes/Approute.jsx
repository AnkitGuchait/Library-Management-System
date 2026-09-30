import { BrowserRouter, Routes, Route } from "react-router";

// Components
import Layout from "../components/layouts/Layout";
import ProtectedRoute from "./Protectedroute";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";

import Books from "../pages/books/Books";
import BookDetails from "../pages/books/BookDetails";
import AddBook from "../pages/books/AddBook";
import EditBook from "../pages/books/EditBook";

import Members from "../pages/members/Member";
import MemberDetails from "../pages/members/MemberDetails";
import AddMember from "../pages/members/AddMember";
import EditMember from "../pages/members/EditMember";

import Categories from "../pages/Category";

import IssueBook from "../pages/IssueBook";
import IssuedBooks from "../pages/IssuedBook";
import History from "../pages/History";

import Fines from "../pages/Fines";
import Profile from "../pages/Profile";

import NotFound from "../pages/NotFound";
import ReverseProtectedRoute from "./ReverseProtectedroute";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* REVPROTECTED ROUTES  */}

        <Route element = {<ReverseProtectedRoute/>}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        


        {/*  PROTECTED ROUTES */}

        <Route element={<ProtectedRoute />}>

          {/* Layout */}
          <Route element={<Layout />}>

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />


            {/*  BOOK ROUTES  */}

            <Route
              path="/books"
              element={<Books />}
            />

            <Route
              path="/books/add"
              element={<AddBook />}
            />

            <Route
              path="/books/edit/:id"
              element={<EditBook />}
            />

            <Route
              path="/books/:id"
              element={<BookDetails />}
            />


            {/* MEMBER ROUTES */}

            <Route
              path="/members"
              element={<Members />}
            />

            <Route
              path="/members/add"
              element={<AddMember />}
            />

            <Route
              path="/members/edit/:id"
              element={<EditMember />}
            />

            <Route
              path="/members/view/:id"
              element={<MemberDetails />}
            />


            {/*  CATEGORY */}

            <Route
              path="/category"
              element={<Categories/>}
            />


            {/*  ISSUE BOOK */}

            <Route
              path="/issue-book"
              element={<IssueBook />}
            />

            <Route
              path="/issued-books"
              element={<IssuedBooks />}
            />

            <Route
              path="/history"
              element={<History />}
            />


            {/*  OTHER PAGES  */}

            <Route
              path="/fines"
              element={<Fines />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Route>

        </Route>


        {/*  404  */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;