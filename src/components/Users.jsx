import { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";
import { Header } from "./shared/Header";
import { SideBar } from "./shared/SideBar";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { sendRequest } = useHttp();

  const fetchData = async (pageNumber) => {
    sendRequest(
      {
        method: "GET",
        url: `http://localhost:3001/users?page=${pageNumber}`,
      },
      (responseData) => {
        console.log(responseData);
        if (responseData.status === 200) {
          setUsers(responseData.users);
          setTotalPages(responseData.totalPages);
          setPage(responseData.page);
        }
      }
    );
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <SideBar />
        <main>
          <div className="user-section">
            <h3>User Management</h3>
            <table>
              <thead>
                <tr>
                  <th colSpan={5}>
                    <button className="addnew">Add New</button>
                  </th>
                </tr>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user.email}>
                      <td>{user.user}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.status}</td>
                      <td>
                        <i className="fas fa-edit blue"></i>
                        {"  "}
                        <i className="fas fa-trash blue"></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="pagination">
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                {"<"}
              </button>
              <span>
                Page <strong>{page}</strong> of <strong>{totalPages}</strong>
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                {">"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
