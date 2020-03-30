import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneField(props) {
    const [phone, setPhone] = useState('');
    return (
        <div className="hoverClass">
            <PhoneInput
                placeholder="Enter phone number"
                searchPlaceholder="Search"
                inputStyle={{
                    border: 'none',
                    borderRadius: 0,
                    backgroundColor: 'none',
                    background: 'rgba(255, 255, 255, .4)'
                }}
                containerStyle={{
                    border: 'none',
                    borderBottom: '1px solid',
                    borderRadius: 0,
                    textAlign: 'left',
                    width: '10px'
                }}
                buttonStyle={{ border: 'none', borderRadius: 0, background: 'rgba(255, 255, 255, .4)' }}
                country={'us'}
                value={phone}
                onChange={phone => setPhone(phone)}
            />
        </div>
    );
}
export default PhoneField;
