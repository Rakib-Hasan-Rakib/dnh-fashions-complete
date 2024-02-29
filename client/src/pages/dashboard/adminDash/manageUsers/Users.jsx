import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import DataNotFoundAnim from "../../../../components/shared/animations/DataNotFoundAnim";
import Container from "../../../../components/shared/Container";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);
  const { loading } = useAuth();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`)
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, [flag]);

  return (
    <Container>
      <div className="overflow-x-auto my-4 min-h-[calc(100vh-200px)]">
        {users.length > 0 ? (
          <table className="table">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th>Photo</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                users?.map((user) => {
                    return (
                      <User
                        key={user._id}
                        singleUser={user}
                        setFlag={setFlag}
                      />
                    );
                })}
            </tbody>
          </table>
        ) : (
          <DataNotFoundAnim />
        )}
      </div>
    </Container>
  );
};
export default Users;
