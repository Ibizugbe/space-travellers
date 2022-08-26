import React from 'react';
import { useSelector } from 'react-redux';
import RocketProfile from '../rockets/RocketProfile';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocketReducer);
  const profileRocket = rocketList.filter(
    (rocket) => rocket.reservation === true,
  );
  return (
    <>
      <main>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>My Rocket Reservations</th>
              </tr>
            </thead>
            <tbody>
              {profileRocket.length ? (
                profileRocket.map((item) => (
                  <RocketProfile key={item.id} id={item.id} name={item.name} />
                ))
              ) : (
                <tr className="empty">
                  <td>No Rockets have been reserved</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Profile;
