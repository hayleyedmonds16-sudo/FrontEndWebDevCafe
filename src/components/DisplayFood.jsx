export default function DisplayFood({ items }) {
    return (
        <div>
            {items.map((details) => (
                <p>{details.name}</p>
            ))}
        </div>
    )
}