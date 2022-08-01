interface IProps {
  name: string,
  phone: string,
  username: string,
  website: string
}

const Profile = ({ name, phone, username, website}: IProps) => {
  return (
    <div className="profile">
      <div>
        Name: {name}
      </div>
      <div>
        Phone: {phone}
      </div>
      <div>
        Username: {username}
      </div>
      <div>
        Website: {website}
      </div>
    </div>
  )
}

export default Profile;