export default function SettingsAdvancedDisplay({advancedDisplay, setAdvancedDisplay}) {
    function handleChange(event) {
        if (event.target.id === 'settings-font-size-input') {
            setAdvancedDisplay(
                {
                    ...advancedDisplay,
                    fontSize: event.target.value,
                }
            );
        } else if (event.target.id === 'settings-text-color-input') {
            setAdvancedDisplay(
                {
                    ...advancedDisplay,
                    textColor: event.target.value,
                }
            );
        } else if (event.target.id === 'settings-background-color-input') {
            setAdvancedDisplay(
                {
                    ...advancedDisplay,
                    backgroundColor: event.target.value,
                }
            );
        }
    }
    
    return (
        <section>
            <h3>Advanced Display</h3>

            <div id="settings-advanced-display-inputs-container">
                <div className="slider-container">
                    <label htmlFor="settings-font-size-input"><i>Font Size</i></label>

                    <input type="number" id="settings-font-size-input" min="12" onChange={handleChange} value={advancedDisplay.fontSize}/>
                </div>

                <div className="slider-container">
                    <label htmlFor="settings-text-color-input"><i>Text Color</i></label>

                    <input type="color" id="settings-text-color-input" onChange={handleChange} value={advancedDisplay.textColor === '' ? '#000000' : advancedDisplay.textColor}/>
                </div>

                <div className="slider-container">
                    <label htmlFor="settings-background-color-input"><i>Background Color</i></label>

                    <input type="color" id="settings-background-color-input" onChange={handleChange} value={advancedDisplay.backgroundColor === '' ? '#000000' : advancedDisplay.backgroundColor}/>
                </div>
            </div>
        </section>
    )
}