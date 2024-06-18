import BurgreBtn from '../BurgreBtn';
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { UserComponent } from '../UserComponent';
const Header = () => {
  return (
    <header>
      <LogoComponent />
      <UserComponent />
      <BurgreBtn />
    </header>
  );
};
export default Header;
