import React from "react";
import _isEmpty from "lodash/isEmpty";
import moment from 'moment';

function HomePage(props) {
  const displayingData = props => {
    const { googleData, facebookData, linkedInData } = props;
    if (!_isEmpty(googleData)) {
      return (
        <>
          <div>
            <b className="userColor">Email: </b>

            <b className="userDetail">{googleData.email}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">Name: </b>
            <b className="userDetail">{googleData.name}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">GoogleId: </b>
            <b className="userDetail">{googleData.googleId}</b>
          </div>
        </>
      );
    } else if (!_isEmpty(facebookData)) {
      return (
        <>
          <div>
            <b className="userColor">Name: </b>
            <b className="userDetail">{facebookData.name}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">Id: </b>
            <b className="userDetail">{facebookData.id}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">data_access_expiration_time: </b>
            <b className="userDetail">{moment(new Date(parseInt(facebookData.data_access_expiration_time, 10) * 1000)).format('DD/MM/YYYY')}</b>
          </div>
        </>
      );
    } else if (!_isEmpty(linkedInData) ) {
      return (
        <>
          <div>
            <b className="userColor">First Name: </b>
            <b className="userDetail">{linkedInData.localizedFirstName}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">Last Name: </b>
            <b className="userDetail">{linkedInData.localizedLastName}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">Id: </b>
            <b className="userDetail">{linkedInData.id}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">Country: </b>
            <b className="userDetail">{linkedInData.firstName.preferredLocale.country}</b>
          </div>
          <div className="userMargin">
            <b className="userColor">Language: </b>
            <b className="userDetail">{linkedInData.firstName.preferredLocale.language}</b>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <b className="userColor">Email: </b>
          <b className="userDetail">{props.emailLogin}</b>
        </div>
      );
    }
  };
  return <div>{displayingData(props)}</div>;
}
export default HomePage;
