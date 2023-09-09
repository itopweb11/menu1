import React, {useState} from 'react';
import './Hookah.scss'
import HookahElement from "../../components/HookahElement/HookahElement";

const Hookah = () => {
    const [hookah, setHookah] = useState(false)

    const f = () => {
        if (hookah) setHookah(false)
    }

    return (
        <div  className="hookah">
            <HookahElement hookah={hookah} setHookah={setHookah}/>
        </div>
    );
};

export default Hookah;
