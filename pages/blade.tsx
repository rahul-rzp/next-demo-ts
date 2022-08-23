import type { NextPage } from 'next'
import axios from 'axios'
import { Button, Checkbox, CreditCardIcon, Heading, Link, Text, Title } from '@razorpay/blade/components';
import styled from 'styled-components';

const Home: NextPage = ({ data }: any) => {
  return (
   <div>
<Text
  contrast="low"
  size="medium"
  truncateAfterLines={3}
  type="normal"
  variant="body"
  weight="regular"
>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
</Text>
<Button variant='primary' icon={CreditCardIcon} iconPosition='right'>Pay Now</Button>
      
<Button variant='secondary' icon={CreditCardIcon} iconPosition='left'>Pay Now</Button>
      
<Button variant='tertiary' icon={CreditCardIcon} iconPosition='left'>Pay Now</Button>
<Title
  contrast="low"
  type="normal"
  variant="large"
>
  Power your finance, grow your business
</Title>

<Heading
  contrast="low"
  type="normal"
  variant="large"
  weight="bold"
>
  Get Started With Payment Gateway
</Heading>
<Checkbox
  defaultChecked
  labelPosition="top"
  onChange={function noRefCheck(){}}
>
  Toggle checkbox
</Checkbox>
<Link
    href="https://github.com/razorpay/blade"
    icon={function noRefCheck(){}}
    iconPosition="left"
    rel="noreferrer noopener"
    target="_blank"
    variant="anchor"
  >
    Learn More
  </Link>
  {/* <styled.div
    paddingBottom="spacing.2"
    paddingTop="spacing.3"
  >
    <BaseText fontWeight="bold">
      Button
    </BaseText>
  </styled.div> */}
  <Link
    icon={function noRefCheck(){}}
    iconPosition="left"
    variant="button"
  >
    Learn More
  </Link>
   </div>
  )
}


export default Home
