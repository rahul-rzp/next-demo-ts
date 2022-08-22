import type { NextPage } from 'next'
import axios from 'axios'
import { Button } from '@razorpay/blade/components';
import {OtherButton, PrimaryButton, ButtonMui, SecondaryButton} from './blade/Button';

const Misc: NextPage = ({ data }: any) => {
  return (
   <div>
    <PrimaryButton>
      Pay now1
    </PrimaryButton>
    <SecondaryButton>
      hii
    </SecondaryButton>
    <OtherButton>
      hi22
    </OtherButton>
    {/* <Button
      iconPosition="left"
      onClick={function (){}}
      size="medium"
      type="button"
      variant="secondary"
      >
      Pay Now
    </Button> */}
    <Button
      iconPosition="left"
      onClick={function (){}}
      size="medium"
      type="button"
      variant="tertiary"
      >
      Pay Now
    </Button>
    <ButtonMui>
      mui button
    </ButtonMui>
   </div>
  )
}

// export async function getServerSideProps(){
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//   return {
//     props: {
//       data: response.data
//     }
//   };
// }

export default Misc
