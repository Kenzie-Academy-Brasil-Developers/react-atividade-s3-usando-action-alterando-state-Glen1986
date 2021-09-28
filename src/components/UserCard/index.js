import {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {changeName} from "../../store/modules/user/actions";
import {Container} from "./styles";

export const UserCard = () => {
  const result = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [text, setText] = useState((""))

  const handleClick = () => {

    dispatch(changeName(text));
  }
  return (
    <Container>
      <div>userName:{result.name}</div>
      <input type="text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Change</button>
    </Container>
  )
}

export default UserCard;
