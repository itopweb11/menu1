import React from 'react';
import './PersonalAreaEdit.scss'

const PersonalAreaEdit = () => {
    return (
        <div className="personalAreaEdit">
            <div>
                <p>Имя</p>
                <input type="text"/>
            </div>
            <div>
                <p>Телефон</p>
                <input type="text"/>
            </div>
            <div>
                <p>Почта</p>
                <input type="text"/>
            </div>
            <button>Сохранить</button>
        </div>
    );
};

export default PersonalAreaEdit;
