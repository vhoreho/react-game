export const ToggleBtn = ({onClick, whoIsNext}) => {
    return (
        <div className='toggle-wrapper'>
            <input type="checkbox" className="toggle" onClick={onClick} onChange={() => {}} checked={whoIsNext} />
        </div>
    )
}