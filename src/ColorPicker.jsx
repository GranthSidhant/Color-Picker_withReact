import React, {useState} from 'react';

function ColorPicker(){
const [color, setColor] = useState('#000000');

    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color:</p>
            </div>
            <lable>Select a Color:</lable>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker;