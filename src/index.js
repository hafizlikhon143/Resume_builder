import React from 'react';
import {createRoot} from 'react-dom/client';
import CV from './Components/desktop/cv';
import Main from './Components/main';

var root = createRoot(document.getElementById("root"));
root.render(<Main tab="home"/>);
