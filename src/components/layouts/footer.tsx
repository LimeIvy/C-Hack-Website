import { RobotoSlab } from '@/styles/font';
import { JSX } from 'react';


function getCopyrightYearText(startYear: number): string {
  return startYear.toString();
}


export default function Footer(): JSX.Element {
  return (
    <footer>
      <address className={RobotoSlab.className}>
        Copyright &copy; {getCopyrightYearText(2025)} Terminal. All rights reserved.
      </address>
    </footer>
  );
}
