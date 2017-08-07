import App from './App';
import Home from './Home';
import Profile from './Profile';
import User from './User';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
User.UserAdd=UserAdd;
User.UserList=UserList;
User.UserDetail=UserDetail;
export {App,Home,Profile,User};


//ES7写法
/*export App from './App.js';
export Home from './Home.js';
export Profile from './Profile.js';
export User from './User.js';*/
