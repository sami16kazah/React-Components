
import Button from '../components/Button';
import { FaBeer } from "react-icons/fa";
function ButtonPage() {
  return (
    <div >
     <div>
      <Button plain>Plain</Button>
      <div >
      <Button primary outline rounded>
      <FaBeer className='m-auto mr-1'></FaBeer>
        Primary
        
      </Button>
      </div>

      <Button secondary rounded>Secondery</Button>
      <Button success outline>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
     </div>
    </div>
  );
}

export default ButtonPage;
