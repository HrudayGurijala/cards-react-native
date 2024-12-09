import React from "react";
import {

  SafeAreaView,
  ScrollView
} from 'react-native';

import FlatCards from './components/FlatCards';
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import OpacityButton from "./components/OpacityButton";
import ContactList from "./components/ContactList";

function App(){
  return(
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <OpacityButton/>
      <ContactList/>
      </ScrollView>

    </SafeAreaView>
  );

}

export default App