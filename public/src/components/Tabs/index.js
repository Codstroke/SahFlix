import React, {useState} from 'react'
import Tabs from "./Tabs";
import {tabLabels} from './constant'; 
const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);

    const onCLickTab = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <Tabs activeTabName={activeTab} onClickTab={onCLickTab} />
      
    </div>
  );
};

export default TabComponent;
