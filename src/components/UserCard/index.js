import {useDispatch} from "react-redux";
import {changeName} from "../../store/modules/user/actions";

export const UserCard = ({newName}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName({newName}));
  }

  return (
    <div>
      <input type="text" value="inop"></input>
      <button onClick={() => handleClick()}>Change</button>
    </div>
  )
}

export default UserCard;
