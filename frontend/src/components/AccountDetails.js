const AccountDetails = (props) => {

    return (
      <div className='container'>
          <label>{props.user.username}</label>
          <p>{props.user.name + ' ' + props.user.surname}</p>
      </div>
    );
}

export default AccountDetails;