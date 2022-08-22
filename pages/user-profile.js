function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
      <h3>{props.time}</h3>
    </div>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(params);

  return {
    props: {
      username: "MAX",
      time: new Date().toString(),
    },
  };
}
