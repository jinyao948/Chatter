import axios from 'axios';

// const [userObj, setUserObj] = useState({
//   username: '',
//   secret: '',
// });

// createUser = async userObj => {
//   try {
//     let user = await axios.post(
//       'https://api.chatengine.io/projects/people/',
//       userObj,
//     );
//   } catch (e) {
//     console.log(e);
//   }
// };
const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post(
      'https://api.chatengine.io/projects/people/',
      { username: userName, secret: userId },
      { headers: { 'Private-Key': process.env.CHAT_ENGINE_PRIVATE_KEY } },
    )
    .then(apiRes => {
      res.json({
        body: apiRes.data,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: 'There was an error creating the user',
      });
    });
};

export default createUser;
