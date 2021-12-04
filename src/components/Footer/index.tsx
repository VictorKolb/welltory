import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import s from './Footer.module.scss';

export default function Footer(): JSX.Element {
  return (
    <div className={s.footer}>
      <div className={s.appWrapper}>
        <span className={s.text}>Get the mobile app</span>
        <span>
          <a
            href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8"
            target="_blank"
            rel="noreferrer"
            className={s.storeLink}
          >
            <img src="img/app-store.svg" alt="" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.welltory.client.android"
            target="_blank"
            rel="noreferrer"
            className={s.storeLink}
          >
            <img src="img/google-play.svg" alt="" />
          </a>
        </span>
      </div>

      <div className={s.linksWrapper}>
        <div className={s.boringLinksWrapper}>
          <div>
            <a href="https://welltory.com/terms/" className={s.link}>
              Terms of use
            </a>
          </div>

          <span className={s.text}>|</span>

          <div>
            <a href=" https://welltory.com/privacy/" className={s.link}>
              Privacy policy
            </a>
          </div>
        </div>

        <div className={s.socialWrapper}>
          <a
            href="https://twitter.com/welltory"
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src="img/tw.png" width="25px" alt="" />
          </a>
          <a
            href="https://www.facebook.com/welltory"
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src="img/fb.png" width="25px" alt="" />
          </a>
          <a
            href="https://www.instagram.com/welltory/"
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src="img/insta.png" width="25px" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/welltory"
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src="img/in.png" width="25px" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
