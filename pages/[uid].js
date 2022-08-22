function UserIdPage(props) {
  return (
    <div>
      <h1>{props.userid}</h1>
    </div>
  );
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userid = params.uid;

  return {
    props: {
      userid: 'userid-' + userid,
    },
  };
}
