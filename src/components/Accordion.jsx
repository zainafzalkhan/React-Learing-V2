import { useState } from 'react'

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <h2>Accordion Title</h2>
            <button onClick={handleToggle}>{isOpen ? 'Close' : 'Open'}</button>
            {isOpen && <div>Accordion Content</div>}
    </div>
  );
};

export default Accordion;