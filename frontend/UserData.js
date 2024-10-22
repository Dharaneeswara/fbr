import React from 'react';

const UserData = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        users.map((curUser) => {
          const { id, name, email, address } = curUser;
          const street = address?.street || "N/A";
          const city = address?.city || "N/A";
          const zipcode = address?.zipcode || "N/A";

          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{`${street}, ${city}, ${zipcode}`}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="4">No data available</td>
        </tr>
      )}
    </>
  );
};

export default UserData;
