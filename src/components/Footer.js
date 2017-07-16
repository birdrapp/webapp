import React from 'react';
import { Link } from 'react-router-dom';
import * as ui from '../ui';

export default function Footer(props) {
  return (
    <ui.Footer>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/sign-out">Sign out</Link></p>
    </ui.Footer>
  );
}
