import React from 'react';
import { Mycomponent1 } from './Components/Mycomponent1';
import { Mycomponent2 } from './Components/Mycomponent2';
import { Mycomponent3 } from './Components/Mycomponent3';
import { Mycomponent4 } from './Components/Mycomponent4';
import { Mycomponent5 } from './Components/Mycomponent5';
import Myclasscomponent1 from './Components/Myclasscomponent1';
import Myclasscomponent2 from './Components/Myclasscomponent2';

const App = () => {
  return (
    <div>
      <Mycomponent1 />
      <Mycomponent2 />
      <Mycomponent3 />
      <Mycomponent4 />
      <Mycomponent5 />
      <Myclasscomponent1 />
      <Myclasscomponent2 />
    </div>
  );
};

export default App;
