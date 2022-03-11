import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Img from 'components/Img';
import Wrapper from './Wrapper';
import messages from './messages';
import Logo from './footer_logo.png';

function Footer() {
  return (
    <Wrapper>
      <section>
        <div>
          <Img src={Logo} alt="react-boilerplate - Logo" />
          <p
            style={{
              margin: 0,
              textAlign: 'center',
            }}
          >
            Số 1 Phạm Ngọc Thạch, Quận 1, TP HCM
          </p>
          <p
            style={{
              margin: 0,
              textAlign: 'center',
            }}
          >
            Tel: (84.8) 38225124 - 38225146
          </p>
          <p
            style={{
              margin: 0,
              textAlign: 'center',
            }}
          >
            Fax: (84.8) 38244705
          </p>
          <br />
          <p
            style={{
              margin: 0,
              textAlign: 'center',
            }}
          >
            Email: thanhdoan@tphcm.gov.vn
          </p>
        </div>
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
