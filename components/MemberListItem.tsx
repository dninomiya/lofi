import { getGraceTimeToExpulsion } from '../services/UserService';
import { User } from '../types/User';

const MemberListItem = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>
        {user.emoji} {user.name} Lv.{user.lv} {!user.isActive && '💤'}
      </h2>
      {/* <p className="opacity-60 text-sm">
        {user.isActive
          ? user.exp.toLocaleString() + ' Exp獲得'
          : getGraceTimeToExpulsion(user.lastLoggedInAt) + '後にお別れです'}
      </p> */}
      {/* <p>回収</p> */}
      <p className="opacity-60 text-sm">{user.task}</p>
    </div>
  );
};

export default MemberListItem;
