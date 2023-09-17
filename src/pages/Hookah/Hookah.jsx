import React, {useState} from 'react';
import './Hookah.scss'
import HookahElement from "../../components/HookahElement/HookahElement";
import HookahModal from "../../components/HookahModal/HookahModal";

const Hookah = ({setBasket, basket}) => {
    const [hookah, setHookah] = useState(false)

    return (
        <div  className="hookah">
            <HookahElement basket={basket} setBasket={setBasket} setHookah={setHookah}/>
            {hookah ? <HookahModal setHookah={setHookah}/> : ""}
        </div>
    );
};

export default Hookah;
